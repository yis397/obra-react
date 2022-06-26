import React from 'react';
import { Routes ,Route,Router, BrowserRouter } from 'react-router-dom';
import { HomePage } from '../pages';
import AuthRutas from './AuthRutas';
import PrivateRutas from './PrivateRutas';

function AppRutas() {
    return (
        
     <BrowserRouter>
       <Routes>
         <Route path="/home" element={<HomePage/>}/>
         <Route  path="/auth/*" element={<AuthRutas/>}/>
         <Route  path="/works/*" element={<PrivateRutas/>}/>
       </Routes>
     
     </BrowserRouter>     
    );
}

export default AppRutas;