import React from 'react';

function WorkLayout({children}:any) {
    return (
        <div className='containter_I w-100 d-flex justify-content-center align-items-center ps-md-0 ps-4'>
            <div className='body_I rounded-4'>
                  {children}
            </div>
        </div>
    );
}

export default WorkLayout;