import React from 'react';
import { NavLink } from 'react-router';
import user from '../assets/user.png'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className=""></div>
            <div className="nav flex gap-5 ">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
                <NavLink to='/carrer'>Carrer</NavLink>
            </div>
            <div className="button flex gap-3">
                <img src={user} alt="" srcset="" />
                <button className='btn bg-secondary text-base-100 px-6'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;