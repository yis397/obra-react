import React from 'react';
import { IActividad } from '../../interfaces/models';
interface Prop{
  actividad:IActividad
  delet:()=>void
}
function Actividad({actividad,delet}:Prop) {
    return (
        <a href="#" className="list-group-item list-group-item-action flex-column align-items-start active mb-1" >
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">{actividad.nombre}</h5>
      <small>I:{actividad.inicio}</small>
      <small>F:{actividad.final}</small>
      <small><button  className="btn btn-danger" onClick={delet}>Delet</button></small>
    </div>
    <p className="mb-1">{actividad.descripcion}</p>
    <small>Precio Total:${actividad.precio}</small>
  </a>
    );
}

export default Actividad;