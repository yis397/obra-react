import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { registerEmail, setMensaje } from '../../store/slices';
import AuthLayout from '../layout/AuthLayout';
interface FormData{
  email:string
  password:string
  password2:string
  nombre:string
}
 function RegisterScreen() {
  const { register, handleSubmit,reset, formState: { errors } } = useForm<FormData>();
  const navigate=useNavigate()
  const {persona}=useAppSelector(state=>state.auth)
  const dispatch = useAppDispatch()
  React.useEffect(() => {
    if(persona.id.length!==0){
      setTimeout(() => {
        navigate('/work/inicio')
      }, 1000);
    }
  }, [persona])
  
  const newRegister=({email,nombre,password,password2}:FormData)=>{
    if(password!==password2){
      dispatch(setMensaje("E-password invalidos"))
      return;}
    dispatch(registerEmail({email,nombre,password}))
    reset()
  }
    return (
        <AuthLayout>
            
            <div className="container" style={{width:'100%',height:'100%',padding:0}}>
                
                <div className='row'>
                <div className="col-md-4 col-sm-12 ">
                <Link to={'/auth/login'} className='link ms-3'>
                Ya tienes cuenta?
               </Link>
                </div>
   
                 <div className="col-md-8 col-sm-12 p-4 " style={{background:"#097caf",height:'60vh',display:'flex',justifyContent:'center',flexDirection:'column'}}>
                  {
                    persona.msg[0]==='E'?<p className='text-bg-danger p'>{persona.msg}</p>:<p className='text-bg-success p'>{persona.msg}</p>
                  }
                  <h2 className='mt-1 '>Registrate</h2>
                 <form onSubmit={handleSubmit(newRegister)} style={{height:'100%',display:'flex',flexDirection:'column'}}>

                 <div className="">
                    <input type="text" className="form-control is-valid" id="validationServer01" required placeholder='nombre'
                    {...register('nombre',{required:'requerido'})}/>{!!errors.nombre && errors.nombre.message}
                    <input type="text" className="form-control is-valid"  required placeholder='apellido'/>
                    <div className="valid-feedback">
                      Looks good!
                    </div>
                   </div>
   
                   <div className="">
                    <input type="email" className="form-control is-valid" id="validationServer01" required placeholder='Email'
                    {...register('email',{required:'requerido'})}/>{!!errors.email && errors.email.message}

                    <div className="valid-feedback">
                      Looks good!
                    </div>
                   </div>
   
                   <div className="">
                    <input type="password" className="form-control is-valid" id="validationServer02" required placeholder='password'
                    {...register('password',{required:'requerido',minLength:6})}/>{!!errors.password && errors.password.message}

                    <input type="password" className="form-control is-valid"  required placeholder='confirma password'
                    {...register('password2',{required:'requerido',minLength:6})}/>{!!errors.password2 && errors.password2.message}

                    <div className="valid-feedback">
                      Looks good!
                    </div>
                   </div>
                
                   <button type="submit" className="btn btn-success">Confirmar</button>
                 </form>
                
                 </div>
                </div>
               </div>
      
        </AuthLayout>
    );
}

export default RegisterScreen;