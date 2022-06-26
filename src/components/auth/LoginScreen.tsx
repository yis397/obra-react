import React from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../layout/AuthLayout';

function LoginScreen() {
    return (
        <AuthLayout>
            <div className="container" style={{width:'100%',height:'100%',padding:0}}>
                
             <div className='row'>
             <div className="col-4 ">col-8</div>

              <div className="col-8 p-4 " style={{background:"#097caf",height:'60vh',display:'flex',justifyContent:'center',flexDirection:'column'}}>
               
               <h2>Inicia Secion</h2>
              <form style={{height:'100%',display:'flex',justifyContent:'space-between',flexDirection:'column'}}>

                <div className="mb-3">
                <label form="validationServer01" className="form-label">Email</label>
                 <input type="text" className="form-control is-valid" id="validationServer01" required placeholder='Email'/>
                 <div className="valid-feedback">
                   Looks good!
                 </div>
                </div>

                <div className="mb-3">
                <label form="validationServer02" className="form-label">Password</label>
                 <input type="password" className="form-control is-valid" id="validationServer02" required placeholder='password'/>
                 <div className="valid-feedback">
                   Looks good!
                 </div>
                </div>
                
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" placeholder='nombre' />
                  <label className="form-check-label">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
               <Link to={'/auth/register'} className='link'>
                no tienes cuenta?
               </Link>
              </div>
             </div>
            </div>
        </AuthLayout>
    );
}

export default LoginScreen;