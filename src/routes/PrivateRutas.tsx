import React from 'react';
import { Navigate, Route, Routes, } from 'react-router-dom';
import {InicioPage,MaterialPage,PersonalPage} from '../pages';
import NavBar from '../components/shared/NavBar';
import { IAuth } from '../interfaces/models';
import { useAppSelector } from '../store/hooks';

function PrivateRutas({islogin}:{islogin:boolean}) {
  const {persona}=useAppSelector(state=>state.auth);
  
  if (!islogin) {
    return <Navigate to={'/home'}></Navigate>
  }else{

    return (
       <div className='general row w-100 '>
         <div className='col-md-2 col-sm-12'>
        <NavBar/>

         </div>

         <div className='bodyy container col-md-10 col-sm-12'>
        <Routes >
           <Route path="inicio" element={<InicioPage persona={persona}/>}/>
           <Route path="personal" element={<PersonalPage persona={persona}/>}/>
           <Route path="material" element={<MaterialPage persona={persona}/>}/>
          
       </Routes>

         </div>
          </div>
        
    );
}

  }

export default PrivateRutas;