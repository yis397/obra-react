import React from 'react';
import { Routes ,Route,Router, BrowserRouter } from 'react-router-dom';
import { HomePage } from '../pages';
import AuthRutas from './AuthRutas';
import PrivateRutas from './PrivateRutas';
import { useAppSelector } from '../store/hooks';

function AppRutas() {
  const {persona}=useAppSelector(state=>state.auth);
    return (
     <BrowserRouter>
       <Routes>
         <Route path="/home" element={<HomePage/>}/>
         <Route  path="/auth/*" element={<AuthRutas/>}/>
         <Route  path="/works/*" element={<PrivateRutas isAuth={persona.isUser}/>}/>
       </Routes>
     
     </BrowserRouter>     
    );
}

export default AppRutas;