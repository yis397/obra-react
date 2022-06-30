import React from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../store/hooks';
import { AuthGoogle } from '../../store/slices';
import AuthLayout from '../layout/AuthLayout';

function LoginScreen() {
  const dispatch = useAppDispatch()
  const authGoo=()=>{
    dispatch(AuthGoogle())
  }
    return (
        <AuthLayout>
            <div className="container" style={{width:'100%',height:'100%',padding:0}}>
                
             <div className='row'>
             <div className="col-4 ">
             <Link to={'/auth/register'} className='btn text-info position-absolute'>
                no tienes cuenta?
               </Link>
             </div>

              <div className="col-8 p-4 " style={{background:"#097caf",height:'60vh',display:'flex',justifyContent:'center',flexDirection:'column'}}>
               
               <h2>Inicia Secion</h2>
              <form className='d-flex justify-content-between flex-column'>

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

                <div className="btn btn-primary d-flex flex-row"
                        onClick={ authGoo } >
                        <div className="google-icon-wrapper center" style={{background:'#ffff'}}>
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
              </form>
               
              </div>
             </div>
            </div>
        </AuthLayout>
    );
}

export default LoginScreen;