
import { useForm } from 'react-hook-form';
import { useAppSelector } from '../../store/hooks';

import Opciones from './Opciones';
import { IActividad } from '../../interfaces/models';
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
    cantidad   : string;
  };
 interface Prop{
  etiqueta:string,addGeneral:(data:FormGeneral)=>void
 }

 
export function FormsGeneral({etiqueta,addGeneral}:Prop ) {
  const { register, handleSubmit, formState: { errors } } = useForm<FormGeneral>();

    return (
        <form className=' form-control' onSubmit={handleSubmit(addGeneral)}>
                  <div className="mt-2 mb-3">
                    <input type="text" className="form-control is-valid" id="validationServer01" maxLength={10} required placeholder='nombre'{...register('nombre',{required:'requerido'})}/>{!!errors.nombre && errors.nombre.message}
      
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
  addGeneral:(data:FormAct)=>void
}
export function FormsActividad({etiqueta,addGeneral}:Prop2) {
  const {conceptos,cuadrilla}=useAppSelector((state)=>state.insumos)
  const { register, handleSubmit, formState: { errors } } = useForm<FormAct>(); 

    return (
        <form className=' form-control' onSubmit={handleSubmit(addGeneral)}>
                  <div className="mt-2 mb-3">
                    <input type="text" className="form-control is-valid" id="validationServer01" max={25} required placeholder='nombre'{...register('nombre',{required:'requerido'})}/>{!!errors.nombre && errors.nombre.message}
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
                  <Opciones lista={cuadrilla} etiqueta={false} nombre={'cuadrilla'} register={register}/>
                  <Opciones lista={conceptos} etiqueta={false} nombre={'concepto'} register={register}/>
                  <input type="number" className="form-control is-valid" id="validationServer01" required placeholder='cantidad'{...register('cantidad',{required:'requerido'})}/>{!!errors.cantidad && errors.cantidad.message}
                 </div>
                


                 <div>
                  {
                    cuadrilla.length!==0&&conceptos.length!==0?<button type="submit" className="btn btn-success">Agregar</button>
                    :<p>agrege insumos</p>
                  }
                    
                 </div>
        </form>
    );
}