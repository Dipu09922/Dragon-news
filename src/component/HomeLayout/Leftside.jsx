import React from 'react';
import Categories from '../Categories';
import { Suspense } from 'react';

const Leftside = () => {
    return (
        <div>
            <Suspense fallback={<span className="loading loading-dots loading-md"></span>}>
                    <Categories></Categories>
            </Suspense> 
        </div>
    );
};

export default Leftside;