import { Avatar, Button, Navbar } from 'flowbite-react';

import webLogo from '../../../assets/Logo/download.png'
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';

import { useContext, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import 'react-tooltip/dist/react-tooltip.css'

const Header = () => {
    const {user,logOut} = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false)
    const handleLogout = () =>{
        logOut()
        .then(()=> { })
        .catch(error => console.error(error))
    }
    const navItems = <>
    <li className='text-2xl '><Link to='/'>Home</Link></li>
    <li className='text-2xl '> <Link to='/blog'>Blog</Link></li>


{/* 
     {user ? <li><button onClick={handleLogout}>Log out</button> <p>{user.email}</p>
</li> : <li><Link to='/login'>Login</Link></li>} */}
    </> 
    return (
        <Navbar
            fluid={true}
            rounded={true}
            className='p-0 container mx-auto font-abc'
        >
            <Navbar.Brand
            >
                <img
                    src={webLogo}
                    className="lg:w-36 lg:h-36 h-20 w-20"
                />
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                {navItems}  
                <Tooltip
                    id="my-tooltip"
                    content={user? user.displayName : ""}
                    isOpen={isOpen}
                />
                {user ? <>
                    <a data-tooltip-id="my-tooltip" onMouseOver={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
                            {<Avatar alt="User settings" img={user?.photoURL} rounded={true} />}
                    </a>
                    <button gradientDuoTone="pinkToOrange" className='lg:relative btn border-t-green-500 lg:bottom-1 lg:text-xl'>
                    <Link onClick={handleLogout}>Logout</Link>
                </button></> 
                : <button gradientDuoTone="pinkToOrange" className='lg:relative lg:bottom-1 lg:text-xl'>
                    <Link to='/login'>Login</Link>
                </button>
                }
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;