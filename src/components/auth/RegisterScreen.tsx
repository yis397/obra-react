import React from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../store/hooks';
import { registerEmail } from '../../store/slices';
import AuthLayout from '../layout/AuthLayout';

 function RegisterScreen() {
  const dispatch = useAppDispatch()
  const newRegister=(e:any)=>{
    dispatch(registerEmail())
    e.preventDefault()
  }
    return (
        <AuthLayout>
            
            <div className="container" style={{width:'100%',height:'100%',padding:0}}>
                
                <div className='row'>
                <div className="col-4 ">col-8</div>
   
                 <div className="col-8 p-4 " style={{background:"#097caf",height:'60vh',display:'flex',justifyContent:'center',flexDirection:'column'}}>
                  
                  <h2 className='mt-1 '>Registrate</h2>
                 <form onSubmit={newRegister} style={{height:'100%',display:'flex',justifyContent:'space-between',flexDirection:'column'}}>

                 <div className="">
                    <input type="text" className="form-control is-valid" id="validationServer01" required placeholder='nombre'/>
                    <input type="text" className="form-control is-valid"  required placeholder='apellido'/>
                    <div className="valid-feedback">
                      Looks good!
                    </div>
                   </div>
   
                   <div className="">
                    <input type="email" className="form-control is-valid" id="validationServer01" required placeholder='Email'/>
                    <div className="valid-feedback">
                      Looks good!
                    </div>
                   </div>
   
                   <div className="">
                    <input type="password" className="form-control is-valid" id="validationServer02" required placeholder='password'/>
                    <input type="password2" className="form-control is-valid"  required placeholder='confirma password'/>
                    <div className="valid-feedback">
                      Looks good!
                    </div>
                   </div>
                
                   <button type="submit" className="btn btn-success">Submit</button>
                 </form>
                 <Link to={'/auth/login'} className='link'>
                Ya tienes cuenta?
               </Link>
                 </div>
                </div>
               </div>
      
        </AuthLayout>
    );
}

export default RegisterScreen;