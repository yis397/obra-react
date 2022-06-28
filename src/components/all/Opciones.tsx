import React from 'react';
import { UseFormRegister } from 'react-hook-form';
interface Prop{
    etiqueta:boolean,
    nombre:string,
    register:UseFormRegister<any>
    lista:any[]
    
}

export function Opciones({etiqueta,nombre,register,lista}:Prop) {
    return (

        <div className="input-group mb-3">
            {
              etiqueta?<label className="input-group-text" form="inputGroupSelect01">Options</label>:null
            }
         
         <select   defaultValue='' className="form-select" id="inputGroupSelect01" title={nombre} {...register(nombre,{required:'requerido'})}>
           <option  value="">{nombre}</option>
           {
            etiqueta?lista.map((e,i)=>(
             
              <option value={e} key={i}>{e}</option>
             )):
             lista.map((e,i)=>(
              <option  value={e.id} key={i}>{e.nombre}</option>
             ))
             
           }
         </select>
       </div>
    );
}

export default Opciones;