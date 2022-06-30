import React from 'react';
import WorkLayout from '../components/layout/WorkLayout';
import {CardConcept, CardMaterial, FormsGeneral, ModalI} from '../components/all';
import { useForm } from 'react-hook-form';
import { useAppSelector,useAppDispatch } from '../store/hooks';
import { addConcepto, addMaterial, deletConcepto, deletMaterial, updateConcepto } from '../store/slices';
import { IMaterial, IMatUso, IConcepto } from '../interfaces/models';
type FormData = {
  nombre    : string;
  marca   : string;
  unidad: string;
  precio: string;

}
function MaterialPage() {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [matUso, setMatUso] = React.useState<IMatUso[]>([]);
    const refConcept=React.useRef<IConcepto>()
    const { register, handleSubmit,reset, formState: { errors } } = useForm<FormData>();
    const dispatch = useAppDispatch() 
    const {materiales,conceptos}=useAppSelector(state=>state.insumos)
    const addMat=(data:FormData)=>{
      const id=new Date().valueOf().toString();
       dispatch(addMaterial({...data,id,precio:Number.parseFloat(data.precio)} as IMaterial))
    }
    const addMatUso=(material:IMaterial)=>{
      if(!refConcept.current?.id)return
      const exist=matUso.find(e=>e.id===material.id)
      if(exist)return
      const id=new Date().valueOf().toString();
      const uso:IMatUso={id,material,materialid:material.id}
      setMatUso([...matUso,uso])
    }
    const deletMatUso=(id:string)=>{
      const newList=matUso.filter(e=>e.id!==id)
      setMatUso([...newList])
    }
    const setValorMat=(valor:any,id:string)=>{
     const newList:IMatUso[]=matUso.map(e=>{
      if(e.id===id){
        return{
          ...e,
          cantidad:parseFloat(valor.target.value)
        }
      }
      return e;
     })
     setMatUso([...newList])
    }
    const addConcept=(data:any)=>{
      const id=new Date().valueOf().toString();
      dispatch(addConcepto({id,...data}as IConcepto))
      closeModal()
    }
    const selectConcept=(concept:IConcepto)=>{
      setMatUso([])
       refConcept.current=concept;
       if (concept.materiales) {
        setMatUso([...concept.materiales])
        return
       }
  
    
    }
    const cambiosConcept=()=>{
      let precio:number=0;
      for (let i = 0; i < matUso.length; i++) {
        precio=+matUso[i].cantidad!*matUso[i].material.precio 
      }
      const idsMat=matUso.map(e=>{
        return e.id
      })

      dispatch(updateConcepto({...refConcept.current,materiales:matUso,precio,materialesID:idsMat}as IConcepto))
    }

      function closeModal() {
        setIsOpen(false);
      }
    return (
        <WorkLayout>
            <div className="row h-100">
              <div className="cuadr col-md-4 col-sm-12 align-items-center d-flex flex-column justify-content-around">
                <p className=' text h2'>Tus Coneptos</p>
                <button className='btn btn-success' onClick={()=>setIsOpen(true)}>Agrega</button>
                <div className='lista d-flex flex-sm-row flex-md-column'>
                  {
                    conceptos.map(e=>(
                      <div key={e.id} onClick={()=>selectConcept(e)} className='btn'>
                      <CardConcept concepto={e} delet={()=>dispatch(deletConcepto(e.id))}/>
                    </div>
                    ))
                  }
                </div>
              </div>
               
              <div className="inf d-flex flex-direction-column col-md-4 col-sm-12  p-3">
                
                  <div className='datos flex-grow-0 w-100'>
                  <p className=' text-info text h2'>Materiales por concepto</p>
                  <div className='lista overflow-auto'>
                  {
                    matUso.map(e=>(
                      <div className='m-2'>

                        <CardMaterial key={e.id} material={e} save={false} delet={()=>deletMatUso(e.id)}
                        setValor={setValorMat}/>
                      </div>

                      
                    ))
                  }
                  </div>
                  <div className='total  text-center w-100 btn d-flex flex-column' >
                  <p className='btn text-bg-primary'>${refConcept.current?.precio}</p>
                    <button className='btn btn-success' onClick={cambiosConcept}>Guardar cambios</button>
                  </div>
                  </div>
              </div>

              <div className='formu col-md-4 col-sm-12'>
                 <h2 className='text-info text'>Agrega Materiales</h2>
                  <form className="  form p-2 " onSubmit={handleSubmit(addMat)}>
                    
                  <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nombre" aria-label="Nombre"
                    {...register('nombre',{required:'nombre'})}/>
                    <span className="input-group-text">-</span>
                    <input type="text" className="form-control" placeholder="unidad" aria-label="unidad"
                    {...register('unidad',{required:'requerido'})}/>
                    {!!errors.unidad || !!errors.nombre && errors.nombre.message}
                  </div>

               <div className="input-group mb-3">
               <span className="input-group-text">$</span>
                    <input type="number" className="form-control" placeholder="Precio" aria-label="Precio"
                    {...register('precio',{required:'requerido'})}/>
                    <span className="input-group-text">-</span>
                    <input type="text" className="form-control" placeholder="marca" aria-label="marca"
                    {...register('marca',{required:'requerido'})}/>
                    {!!errors.precio || !!errors.marca && errors.marca.message}
                  </div>
                  <button className='btn btn-success' type='submit'>Aceptar</button>
                    
                  </form>
                   

                   <div className='lista overflow-auto p-2'>
                   {
                    materiales.map(e=>(
                      <div className='m-2'>
                        <CardMaterial key={e.id} save={true} delet={()=>dispatch(deletMaterial(e.id))}
                        add={()=>addMatUso(e)} material={e}/>
                      </div>
                    ))
                   }
                   </div>
                  </div>
             </div>
             <ModalI modalIsOpen={modalIsOpen} closeModal={closeModal} titulo={'Agrega un concepto'}>
              <FormsGeneral etiqueta='Descr' addGeneral={addConcept}/>
             </ModalI>
        </WorkLayout>
    );
}

export default MaterialPage;