import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import regi from '../../assets/regi.jpg'


const Signup = () => {
const {createUser}=useContext(AuthContext)
    const handleSignup = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email= form.email.value;
        const password = form.password.value;
        const photo   = form.photo.value;
        const userData = {name,email,password,photo}
        console.log(userData);
        createUser(email,password)
        .then(result =>{
            const createUser = result.user;
            console.log(createUser);
            form.reset();
        })
        .catch(error =>{
            console.error(error)
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
            <div className="w-1/2 mr-20">
           
           <img src={regi} alt="" />
            </div>
            
            <div className="w-full card flex-shrink-0 max-w-sm shadow-2xl bg-base-100">

            <form onSubmit={handleSignup}>
                <div className="card-body bg-yellow-200">
                <h1 className="text-5xl font-bold">Register</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name='name' type="text" placeholder="name" required className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name='email' type="text" placeholder="email" required className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name='password' required type="text" placeholder="password" className="input input-bordered" />
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input name='photo' type="url" placeholder="photo URL" required className="input input-bordered" />
                    </div>
                   
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                   
                </div>
                </form>
                <div className='text-center pb-6'>
                <p className='font-bold mt-6'>Already have an acount?<Link className='text-orange-600 font-bold link-hover' to='/login'>Login Now</Link></p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Signup;<h2>Sign up</h2>