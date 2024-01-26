import React from 'react';
import loadergif from '../assets/home/Mp4.gif';

function Loader() {
    return (
        // 1920x1080
        <div className='loading1'>
            <img src={loadergif} alt="" className='w-full h-[100vh]' />
        </div>
    )
}

export default Loader;