import React from 'react';

function WorkLayout({children}:any) {
    return (
        <div className='containter_I container w-100 h-100 d-flex justify-content-center  align-items-center '>
            <div className='body_I rounded-4 '>
                  {children}
            </div>
        </div>
    );
}

export default WorkLayout;