import React from 'react';
import SwimmingImage from '../../assets/swimming.png'
import classImage from '../../assets/class.png'
import play from '../../assets/playground.png'
const Q_zone = () => {
    return (
        <div>
            
            <div className="bg-base-200 p-3 rounded-lg">
                <h1 className='font-bold mb-5 '>Q_Zone</h1>
                <img src={SwimmingImage} alt=""/>
                <img src={classImage} alt=""/>
                <img src={play} alt=""/>
            </div>
        </div>
    );
};

export default Q_zone;