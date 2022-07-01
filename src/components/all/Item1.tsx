import React from 'react';
import { ITrabajador, ICuadrilla, IMaterial, IConcepto } from '../../interfaces/models';
interface ITem1{
  concepto:IConcepto
  delet:()=>void
}
interface ICard1{
  person:ITrabajador,
  delet:()=>void
  add?:()=>void,
  save:boolean,
  estado?:boolean,

}
interface ICard3{
  material:any,
  delet:()=>void
  add?:()=>void,
  setValor?:(valor:any,i:string)=>void,
  save:boolean,

}
interface ICard2{
  person:ICuadrilla,
  delet:()=>void
}
export function CardConcept({concepto,delet}:ITem1) {
    return (
        <div className="card">
                      
        <div className="card-body">
          <div className="card-title d-flex flex-direction-column">
          <p className='h4'>{concepto.nombre}</p>
          <button className='btn btn-danger '>delet</button>
          </div>
          <p className="card-text h5">{concepto.descripcion}</p>
          
        </div>
      </div>
    );
}
export function CardMaterial({material,delet,add,save,setValor}:ICard3) {
  return (
    <div className="card">
                      
    <div className="card-body">
      
       <div className="card-title d-flex justify-content-between w-100 h-50 flex-column ">
       <p className='overflow-hidden h3'>{save?material.nombre:""}</p>
       <p className='h4'>{material.marca??''}</p>
       </div>

       {
        save?<p className="card-text h5">precio:${material.precio}/{material.unidad}</p>:<p className='h4'>{material.nombre}</p>
       }
          {save
       ?<button  className='btn btn-info flex-direction-column' onClick={add}>add</button>
       :<input type='number' placeholder='uso' onChange={(e)=>setValor!(e,material.id)} 
       value={material.cantidad}/>
      }
         <button className='btn btn-danger flex-direction-column' onClick={delet}         >delet</button>
       
       
     </div>
     
   </div>
  );
}


export function CardPersonal({person,delet,add,save,estado}:ICard1) {
  return (
    <div className="card">
                      
    <div className="card-body">
      
       <div className="card-title d-flex justify-content-between w-100 h-20 ">
       <p className='overflow-hidden h3'>{person.nombre}:</p>
       <p className='h4'>{person.ocupacion}</p>
       <button className='btn btn-danger flex-direction-column' onClick={delet}>delet</button>
       {save
       ?<button disabled={estado} className='btn btn-info flex-direction-column' onClick={add}>add</button>
       :null
      }
       
       </div>
       <p className="card-text h4">salario:${person.salario}/dia</p>
     </div>
     
   </div>
  );
}
export function CardCuadrilla({person,delet}:ICard2) {
  return (
    <div className="card w-100 ">
                      
    <div className="card-body">
      
       <div className="card-title d-flex justify-content-between overflow-hidden">
       <p className=' flex-grow-3 h4' >{person.nombre}:</p>
       
       <button className='btn btn-danger flex-direction-column' onClick={delet}>delet</button>
       </div>
       <p className="card-text h5">salario:${person.costo??0}/dia</p>
     </div>
     
   </div>
  );
}

