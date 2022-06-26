import React, { FC } from 'react';

const  AuthLayout=({children}:any)=> {
    return (
        <div className='' style={{display:'flex',justifyContent:"center",alignItems:'center',width:"100vw",height:"100vh"}}>
            <div className='rounded-5'style={{background:'#ffff',height:'60vh',width:'50vw',overflow:'hidden'}}>
            {children}
            </div>
        </div>
    );
    
}

export default AuthLayout;