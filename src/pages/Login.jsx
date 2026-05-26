import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className='flex justify-center items-center min-h-screen'>
         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
          <h1 className='font-semibold text-2xl text-center'>Login your account</h1>
      <div className="card-body">
        <fieldset className="fieldset">
          <label className=" font-semibold">Email</label>
          <input type="email" className="input border bg-base-200" placeholder="Email" />
          <label className="font-semibold">Password</label>
          <input type="password" className="input border bg-base-200" placeholder="Password" />
          {/* <div><a className="link link-hover">Forgot password?</a></div> */}
          <button className="btn bg-black text-white mt-4">Login</button>
          <Link to='/auth/register' className='font-semibold text-center pt-5'>Dont’t Have An Account ? <span className='text-secondary'>Register</span></Link>
        </fieldset>
      </div>
    </div>
        </div>
    );
};

export default Login;