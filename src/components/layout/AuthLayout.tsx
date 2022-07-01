import React, { FC } from 'react';

const  AuthLayout=({children}:any)=> {
    return (
        <div className='' style={{display:'flex',justifyContent:"center",alignItems:'center',width:"100vw",height:"100vh"}}>
            <div className='rounded-5'style={{background:'#ffff',width:'70vw',overflow:'hidden',height:'55vh'}}>
            {children}
            </div>
        </div>
    );
    
}

export default AuthLayout;