
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { useContext } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebase.config';
import img from '../../assets/Login.jpg'





const Login = () => {
    const auth = getAuth(app)

    const provider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const location = useLocation();
    const navigate = useNavigate();   
    const from = location.state?.from?.pathname || '/';


    const { login } = useContext(AuthContext)
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        login(email, password)
            .then((result) => {
                const loggedUser = result.user;
                navigate(from, { replace: true});
                console.log(loggedUser);
                form.reset()
                

            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleGoogle = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from , {replace:true})
            })
            .catch(error => {
                console.error(error);
            })


    }
    const handleGitHub = () =>{
        signInWithPopup(auth,githubProvider)
        .then(result => {
            const loggedUser = result.loggedUser;
            console.log(loggedUser);
            navigate(from , {replace:true})
        })
        .catch(error => {
            console.error(error);
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="  w-1/3 mr-20">
                  
                    <img className='mx-auto w-96' src={img} alt="" />
                </div>
                <div className="w-full card flex-shrink-0 max-w-sm shadow-2xl bg-base-100">

                    <form onSubmit={handleLogin}>
                        <div className="card-body bg-yellow-200">
                            <h1 className="text-5xl font-bold">Login now!</h1>
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
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />

                            </div>

                        </div>

                    </form>
                    <div className='text-center'>
                        <p className='mt-5 font-bold'>New to here?<Link className=' text-orange-600 font-bold link-hover' to='/signup'>Register Now</Link></p>
                        <div className='py-6 '>
                        </div >
                        <div className='w-auto my-3 mx-6'>
                            <button onClick={handleGoogle} class="btn btn-block btn-outline bg-yellow-200">Google Login</button>
                            <button onClick={handleGitHub} class="btn btn-block btn-outline  bg-yellow-200 py-3">Github Login</button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Login;