
import { useForm } from 'react-hook-form';

import Opciones from './Opciones';
type FormGeneral = {
    nombre    : string;
    descripcion   : string;
  };
  type FormAct = {
    nombre    : string;
    descripcion   : string;
    inicio   : string;
    final   : string;
    cuadrilla   : string;
    concepto   : string;
  };
 interface Prop{
  etiqueta:string,addGeneral:(data:FormGeneral)=>void
 }
 
export function FormsGeneral({etiqueta,addGeneral}:Prop ) {
  const { register, handleSubmit, formState: { errors } } = useForm<FormGeneral>();

    return (
        <form className=' form-control' onSubmit={handleSubmit(addGeneral)}>
                  <div className="mt-2 mb-3">
                    <input type="text" className="form-control is-valid" id="validationServer01" required placeholder='nombre'{...register('nombre',{required:'requerido'})}/>{!!errors.nombre && errors.nombre.message}
      
                   <div className="input-group">
                   <span className="input-group-text">{etiqueta}</span>
                   
                   <textarea className="form-control" aria-label="With textarea"{...register('descripcion',{required:'requerido'})}/>{!!errors.descripcion && errors.descripcion.message}
                 </div>
                   </div>

                 <div>
                    <button type="submit" className="btn btn-success">Agregar</button>
                 </div>
        </form>
    );
}
interface Prop2{
  etiqueta:string
}
export function FormsActividad({etiqueta}:Prop2) {
  const { register, handleSubmit, formState: { errors } } = useForm<FormAct>(); 
  const addActividad=(data:FormAct)=>{
    console.log(data)
  }
    return (
        <form className=' form-control' onSubmit={handleSubmit(addActividad)}>
                  <div className="mt-2 mb-3">
                    <input type="text" className="form-control is-valid" id="validationServer01" required placeholder='nombre'{...register('nombre',{required:'requerido'})}/>{!!errors.nombre && errors.nombre.message}
                    <span>requerido</span>
                   <div className="input-group">
                   <span className="input-group-text">{etiqueta}</span>
                   
                   <textarea className="form-control" aria-label="With textarea"{...register('descripcion',{required:'requerido'})}/>{!!errors.descripcion && errors.descripcion.message}
                 </div>
                   </div>
                 
                  <div>
                    <label htmlFor="inicio" className='text-bg-info fw-bold'> Inicio</label>
                    <input type="date"  {...register('inicio',{required:'requerido'})}/>{!!errors.inicio && errors.inicio.message}
                    <label htmlFor="final" className='text-bg-info fw-bold'> Final Programado</label>
                    <input type="date"{...register('final',{required:'requerido'})}/>{!!errors.final && errors.final.message}
                 </div>
                 <div>
                  <Opciones lista={["1"]} etiqueta={false} nombre={'cuadrilla'} register={register}/>
                  <Opciones lista={["1"]} etiqueta={false} nombre={'concepto'} register={register}/>
                 </div>
                


                 <div>
                    <button type="submit" className="btn btn-success">Agregar</button>
                 </div>
        </form>
    );
}