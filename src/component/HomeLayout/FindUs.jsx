import React from 'react';
import { FaInstagram, FaTwitter } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa6';

const FindUs = () => {
    return (
        <div className='space-y-3'>
            <h1 className='font-semibold'>Find Us On</h1>
             <div class="join join-vertical w-full">
  <button class="btn justify-start bg-base-100 border px-4 join-item"><FaFacebook></FaFacebook> Facebook</button>
  <button class="btn justify-start bg-base-100 border px-4 join-item"><FaTwitter></FaTwitter>Twitter</button>
  <button class="btn justify-start bg-base-100 border px-4 join-item"><FaInstagram></FaInstagram> Instagram</button>
</div>
        </div>
    );
};

export default FindUs;