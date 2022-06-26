import React from 'react';
import { UseFormRegister } from 'react-hook-form';
interface Prop{
    etiqueta:boolean,
    nombre:string,
    register:UseFormRegister<any>
    lista:string[]
}

function Opciones({etiqueta,nombre,register,lista}:Prop) {
    return (

        <div className="input-group mb-3">
            {
              etiqueta?<label className="input-group-text" form="inputGroupSelect01">Options</label>:null
            }
         
         <select className="form-select" id="inputGroupSelect01" title={nombre} {...register(nombre,{required:'requerido'})}>
           <option selected>{nombre}</option>
           {lista.map(e=>(
             
             <option value={e} key={e}>{e}</option>
            ))}
         </select>
       </div>
    );
}

export default Opciones;