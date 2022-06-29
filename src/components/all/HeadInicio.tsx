import React from 'react';
import { IEtapa } from '../../interfaces/models';
interface Prop{
    add:(data:any)=>void
    select:(i:number,e:IEtapa)=>void
    etapas:IEtapa[]
    delet:(id:string)=>void
}
function HeadInicio({add,etapas,delet,select}:Prop) {
    return (
        <div className='etapas row-3'>
                <button type="button" className="btn btn-info rounded-5 ">add</button> 
                    <div className='lista'>
                    
                    {etapas.length!==0?
                    <>
                    {etapas.map((e,i)=>(
                        <div key={e.id}>
                            <button  type="button" onClick={()=>select(i,e)} className="btn btn-secondary" >{e.nombre}</button>
                            <button type="button" className="btn btn-danger " onClick={()=>delet(e.id)}>delet</button>
                        </div> 
                    ))}
                    </>
                    :<p className='btn text-bg-info'>No tienes etapas de construccion</p>
                    }
                    </div>

                    <div className="w-50 ms-5 ps-5" >
                <label form="validationServer01" className="form-label">Agrega una etapa</label>
                <form onSubmit={add}>
                 <input type="text" className="form-control is-valid" id="name" autoComplete='off' 
                 maxLength={10} required placeholder='Nombre' name='nombre' />
                 <button type="submit" className="btn btn-secondary" >Add</button> 

                </form>
                </div>

                </div>
    );
}

export default HeadInicio;