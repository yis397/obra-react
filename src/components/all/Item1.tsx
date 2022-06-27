import React from 'react';
import { ITrabajador, ICuadrilla } from '../../interfaces/models';
interface ITem1{
  salario:boolean
}
interface ICard1{
  person:ITrabajador,
  delet:()=>void
  add?:()=>void,
  save:boolean,
  estado?:boolean,

}
interface ICard2{
  person:ICuadrilla,
  delet:()=>void
}
export function Item1({salario}:ITem1) {
    return (
        <div className="card">
                      
        <div className="card-body">
          <div className="card-title d-flex flex-direction-column">
          <h4 >Title</h4>
          {!salario?<input type="number" placeholder='cantidad'/>:null}
          
          <button className='btn btn-danger '>delet</button>
          </div>
          {salario?<p className="card-text">salario:$250</p>:null}
          
        </div>
      </div>
    );
}



export function CardPersonal({person,delet,add,save,estado}:ICard1) {
  return (
    <div className="card">
                      
    <div className="card-body">
      
       <div className="card-title d-flex justify-content-between w-100 h-20 ">
       <p className='overflow-hidden'>{person.nombre}:</p>
       <p >{person.ocupacion}</p>
       <button className='btn btn-danger flex-direction-column' onClick={delet}>delet</button>
       {save
       ?<button disabled={estado} className='btn btn-info flex-direction-column' onClick={add}>add</button>
       :null
      }
       
       </div>
       <p className="card-text">salario:${person.salario}/dia</p>
     </div>
     
   </div>
  );
}
export function CardCuadrilla({person,delet}:ICard2) {
  return (
    <div className="card w-100">
                      
    <div className="card-body">
      
       <div className="card-title d-flex justify-content-between overflow-hidden">
       <p className='p flex-grow-3'>{person.nombre}:</p>
       
       <button className='btn btn-danger flex-direction-column' onClick={delet}>delet</button>
        
       </div>
       <p className="card-text">salario:${person.costo??0}/dia</p>
     </div>
     
   </div>
  );
}

