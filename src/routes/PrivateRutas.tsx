import React from 'react';
import { Navigate, Route, Routes, } from 'react-router-dom';
import {InicioPage,MaterialPage,PersonalPage} from '../pages';
import NavBar from '../components/shared/NavBar';

function PrivateRutas({isAuth}:{isAuth:boolean}) {
  if (!isAuth) {
    return <Navigate to={'auth'}></Navigate>
  }
    return (
       <div className='general row w-100 '>
         <div className='col-md-2 col-sm-12'>
        <NavBar/>

         </div>

         <div className='bodyy container col-md-10 col-sm-12'>
        <Routes >
           <Route path="inicio" element={<InicioPage/>}/>
           <Route path="personal" element={<PersonalPage/>}/>
           <Route path="material" element={<MaterialPage/>}/>
           
       </Routes>

         </div>
          </div>
        
    );
}

export default PrivateRutas;