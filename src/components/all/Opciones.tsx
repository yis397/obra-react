import React from 'react';
interface Prop{
    etiqueta:boolean,
    nombre:string,
}
function Opciones({etiqueta,nombre}:Prop) {
    return (

        <div className="input-group mb-3">
            {
              etiqueta?<label className="input-group-text" form="inputGroupSelect01">Options</label>:null
            }
         
         <select className="form-select" id="inputGroupSelect01" title={nombre}>
           <option selected>{nombre}</option>
           <option value="0">Peon</option>
           <option value="1">Albañil</option>
           <option value="2">Fontanero</option>
           <option value="3">Electricista</option>
           <option value="4">Arquitecto</option>
           <option value="5">Ingeniero Civil</option>
         </select>
       </div>
    );
}

export default Opciones;