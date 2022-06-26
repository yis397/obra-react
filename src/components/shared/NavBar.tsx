import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div className='NavBar' style={{background:'#097caf',height:'100vh',width:'100%'}}>
            <Link to={'/works/inicio'}  className="btn btn-success">Home</Link>
            <Link to={'/works/personal'} className="btn btn-success">Personal</Link>
            <Link to={'/works/material'} className="btn btn-success">Materiales</Link>
            <button  className="btn btn-success">Registrate</button>
        </div>
    );
}

export default NavBar;