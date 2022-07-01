import React from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../store/hooks';
import { cerrarSecion } from '../../store/slices';
import { useNavigate } from "react-router-dom";

function NavBar() {
   const navigate=useNavigate()
    const signOut=()=>{
        dispatch(cerrarSecion())
        navigate('/Home')
    
    }
    const dispatch=useAppDispatch()
    return (
        <div className='NavBar flex-sm-row flex-md-column' >
            <Link to={'/works/inicio'}  className="btn btn-success ">
                <p className='h4'>Home</p>
            </Link>
            <Link to={'/works/personal'} className="btn btn-success"><p className='h4'>Personal</p></Link>
            <Link to={'/works/material'} className="btn btn-success"><p className='h4'>Material</p></Link>
            <button  className="btn btn-success" onClick={signOut}>Cerrar Secion</button>
        </div>
    );
}

export default NavBar;