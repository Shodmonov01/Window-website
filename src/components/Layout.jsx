import React from 'react';

// million-ignore
function Layout(props) {
    return (
        <div className='px-[10px] md:px-[20px] lg:px-[60px] xl:px-[120px]'>
            {props.children}
        </div>
    )
}

export default Layout;