import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';
const Header = () => {
    return (
        <div className="flex justify-center flex-col items-center gap-3">
            <img className='w-[471px]' src={logo} alt="" />
            <h3 className='text-accent'>Journalism Without Fear or Favour</h3> 
            <h1 className='text-accent font-semibold text-xl'>{format(new Date(),"	EEEE , MMMM dd , yyyy")}</h1> 
        </div>
    );
};

export default Header;
