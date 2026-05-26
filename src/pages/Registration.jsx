import React from 'react';
import { Link } from 'react-router';

const Registration = () => {
    return (
        <div>
          <div className='flex justify-center items-center min-h-screen'>
                   <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                    <h1 className='font-semibold text-2xl text-center'>Register your account</h1>
                <div className="card-body">
                  <fieldset className="fieldset">
                    <label className="label">Your Name</label>
                    <input type="email" className="input border bg-base-200" placeholder="Enter your name" />
                    <label className="label">Photo URL</label>
                    <input type="password" className="input border bg-base-200" placeholder="Enter your password" />
                    <label className="label">Email</label>
                    <input type="password" className="input border bg-base-200" placeholder="Enter your email address" />
                    <label className="label">Password</label>
                    <input type="password" className="input border bg-base-200" placeholder="Enter your password" />
                    {/* <div><a className="link link-hover">Forgot password?</a></div> */}
                    <button className="btn bg-black text-white mt-4">Register</button>
                   <Link to='/auth/login' className='font-semibold text-center pt-5'>Already have An Account ? <span className='text-secondary'>Login</span></Link>
                  </fieldset>
                </div>
              </div>
                  </div>
        </div>
    );
};

export default Registration;