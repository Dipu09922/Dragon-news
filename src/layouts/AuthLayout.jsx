import React from 'react';
import Navbar from '../component/Navbar';
import Login from '../pages/Login';
import { Outlet } from 'react-router';

const LoginLayout = () => {
    return (
        <div className='bg-base-200 min-h-screen'>
            <header className='w-11/12 mx-auto py-4 '>
                <Navbar></Navbar>
            </header>
            <main className='py-5 mx-auto w-11/12'>
                <Outlet>

                </Outlet>
            </main>
        </div>
    );
};

export default LoginLayout;