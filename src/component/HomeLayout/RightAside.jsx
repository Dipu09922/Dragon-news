import React from 'react';
import SocialLogin from './SocialLogin';
import FindUs from './FindUs';
import Q_zone from './Q_zone';

const RightAside = () => {
    return (
        <div className='space-y-8'>
            <SocialLogin>
                
            </SocialLogin>

            <FindUs></FindUs>
            <Q_zone></Q_zone>
        </div>
    );
};

export default RightAside; 