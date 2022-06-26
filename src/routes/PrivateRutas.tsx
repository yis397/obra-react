import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {InicioPage,MaterialPage,PersonalPage} from '../pages';
import NavBar from '../components/shared/NavBar';

function PrivateRutas() {
    return (
       <div className='row w-100'>
         <div className='col-2'>
        <NavBar/>

         </div>

         <div className='col-10'>
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