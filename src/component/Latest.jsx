import { Marquee } from '@dxkit-org/react-marquee';
import React from 'react';


const Latest = () => {
    return (
        <div className='flex items-center gap-3 bg-base-200 p-3'>
            <p className='text-base-100 bg-secondary py-2 px-3'>Latest</p>
    
                    <Marquee className=' flex gap-10'  speed={25} pauseOnHover={true}>
      <p className='font-bold flex gap-4'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
    </Marquee>
           
            
        </div>
    );
};
export default Latest;