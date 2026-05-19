import React from 'react';
import { Outlet } from 'react-router';
import Header from '../component/Header';
import Latest from '../component/Latest';
import Navbar from '../component/Navbar';
import Leftside from '../component/HomeLayout/Leftside';
import RightAside from '../component/HomeLayout/RightAside';
import NewsCart from '../component/NewsCart';


const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto my-3'>
                    <Latest>

                    </Latest>
                </section>
            </header>
            <nav className='w-11/12 mx-auto my-3'>
                <Navbar></Navbar>
            </nav>
            <main className='w-11/12  my-3 grid grid-cols-12 mx-auto'>
                <aside className='col-span-3 '>
                   <Leftside>

                   </Leftside>
                </aside>
                <section className="main col-span-6 ">
                    <Outlet>
                       
                    </Outlet>
                </section>
                <aside className='col-span-3'>
                    <RightAside>

                    </RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;