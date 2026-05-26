import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
    return (
        <div>
            <h1 className='font-bold mb-5'>Login With</h1>
            <div className='flex flex-col gap-2 font-semibold'>
                <button className='btn text-secondary border-2 bg-base-200 w-full hover:bg-[#403F3F] hover:text-base-200 '><FcGoogle size='26'/>  Login With Google</button>
                <button className='btn text-[#403F3F] border-2 bg-base-200 w-full hover:bg-[#403F3F] hover:text-base-200'><FaGithub size='26'/>Login With GitHub</button>
               
            </div>
        </div>
    );
}

export default SocialLogin;