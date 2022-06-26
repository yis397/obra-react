import React from 'react';
import { Routes ,Route,Router } from 'react-router-dom';
import {LoginScreen,RegisterScreen} from '../components/auth';

function AuthRutas({children}:any) {
    return (
        
    <Routes >
        <Route path="register" element={<RegisterScreen/>}/>
        <Route path="login" element={<LoginScreen/>} />

      
    </Routes>
      
       
    );
}

export default AuthRutas;