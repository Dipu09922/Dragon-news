import React from 'react';
 import { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Registration = () => {

const { createUser,setUser } = useContext(AuthContext);
  const handleRegister =(e) =>
  {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    
    console.log({name,photo,email,password});

    createUser(email,password)
    .then((result)=>
    {
      const user = result.user;
      setUser(user);
   
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
  });

  }
    return (
        <div>
          <div className='flex justify-center items-center min-h-screen'>
                   <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                    <h1 className='font-semibold text-2xl text-center'>Register your account</h1>
                <div className="card-body">
                  <form onSubmit={handleRegister} className="fieldset">
                    <label className="label">Your Name</label>
                    <input type="text" name='name' className="input border bg-base-200" placeholder="Enter your name" required />
                    <label className="label">Photo URL</label>
                    <input type="text" name='photo' className="input border bg-base-200" placeholder="Enter your password" required />
                    <label className="label">Email</label>
                    <input type="email" name='email' className="input border bg-base-200" placeholder="Enter your email address" required/>
                    <label className="label">Password</label>
                    <input type="password" name='password' className="input border bg-base-200" placeholder="Enter your password" required />
                    {/* <div><a className="link link-hover">Forgot password?</a></div> */}
                    <button type='submit'  className="btn bg-black text-white mt-4">Register</button>
                   <Link to='/auth/login' className='font-semibold text-center pt-5'>Already have An Account ? <span className='text-secondary'>Login</span></Link>
                  </form>
                </div>
              </div>
                  </div>
        </div>
    );
};

export default Registration;