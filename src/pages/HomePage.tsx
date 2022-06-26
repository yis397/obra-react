import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div className='container-xl' style={{ height:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <div className='body' style={{flexDirection:'column',display:'flex',alignItems:'center'}} >
                <h2>Administra tu personal de trabajo de donde Sea</h2>
                <h3 className='mb-2'>Empieza ahora</h3>

                <div style={{display:'flex',justifyContent:'space-between',width:'40%'}} className={'mt-3'}>
                <Link to={'/auth/login'} type="button" className="btn btn-success" >Iniciar secion</Link>
                <Link  to={'/auth/register'} className="btn btn-success">Registrate</Link>
                </div>
            </div>
        </div>
    );
}

export default HomePage;