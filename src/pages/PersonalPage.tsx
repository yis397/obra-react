import React from 'react';
import { useForm } from 'react-hook-form'
import { CardPersonal, FormsGeneral, Opciones,CardCuadrilla } from '../components/all';
import ModalI from '../components/all/Modal';
import WorkLayout from '../components/layout/WorkLayout';
import { useAppSelector,useAppDispatch } from '../store/hooks';
import { addTrabajador, deletTrabajador,addCuadrilla, updateCuadrilla } from '../store/slices';
import { ITrabajador, ICuadrilla } from '../interfaces/models';



type FormData = {
  nombre    : string;
  apellido   : string;
  ocupacion: string;
  salario: string;
  laborales: string;

}
const ocupacion=['Peon','Albañil','Fontanero','Electricista','Arquitecto','IngCivil']
function PersonalPage() {

  const [personal, setPersonal] = React.useState<ITrabajador[]>([]);
  const idSelect = React.useRef<ICuadrilla>();
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const { register, handleSubmit,reset, formState: { errors } } = useForm<FormData>(); 
  const {trabajadores,cuadrilla}=useAppSelector((state)=>state.insumos)
  const dispatch = useAppDispatch()
  const addTrab=(data:FormData)=>{
    const id=new Date().valueOf().toString();
    dispatch(addTrabajador({trabajadores:{...data,id:id }as ITrabajador }))
    //reset()
  }
  const deletTrCuad=(id:string)=>{
    const newList=personal.filter(e=>e.id!==id)
    setPersonal([...newList])
  }
  const addCuadri=(data:any)=>{
    const id=new Date().valueOf().toString();
    dispatch(addCuadrilla({cuadrilla:{...data,id}as ICuadrilla}))
    reset()
    closeModal()
  }
  const select=(cuadrilla:ICuadrilla)=>{
    setPersonal([])
    idSelect.current=cuadrilla;

    if(cuadrilla.trabajadores){
       setPersonal([...cuadrilla.trabajadores])
       return
    }
  }
  const addpersonal=(t:ITrabajador)=>{
    const exist=personal.find(e=>e.id===t.id)
    if(exist || !idSelect.current?.id)return
    setPersonal([...personal,t])
  }
  const upCuadrilla=()=>{

    dispatch(updateCuadrilla({cuadrilla:{...idSelect.current,trabajadores:personal}as ICuadrilla}))
  }
      function closeModal() {
        setIsOpen(false);
      }
    return (
        <WorkLayout>
            <div className="row h-100" >
              <div className="cuadr col-4 align-items-center d-flex flex-column w-100%  ">
                <h2 >Tus cuadrillas</h2>
                <button className='btn btn-success' onClick={()=>setIsOpen(true)}>Agregar</button>
                <div className='lista h-75'>
                {
                    cuadrilla.map(e=>(
                      <div  key={e.id} onClick={()=>select(e.cuadrilla!)} className='btn w-100'>
                        <CardCuadrilla delet={()=>console.log('hola')}  person={e.cuadrilla!} 
                      />
                      </div>
                        
                    ))
                  }
                </div>
              </div>
               
              <div className="inf d-flex  flex-direction-column col-8 w-100% p-3" >
                
                  <div className='datos flex-grow-0 w-50'>
                  <p className=' text-info text  text-center'>Tus Trabajadores</p>
                  <div className='lista 
                   overflow-auto'>
                  {
                    personal.map(e=>(
        
                      <CardPersonal delet={()=>deletTrCuad(e.id)} save={false} person={e} key={e.id}
                      />
                    ))
                  }
                  </div>
                  <div className='total  text-center w-100 flex-column d-flex'>
                    <p className=' text-bg-light'>Total $ por semana:</p>
                    <p className='btn text-bg-primary'>$2500</p>
                    <button className='btn btn-success' onClick={()=>upCuadrilla()}>Aceptar cambios</button>
                  </div>
                  </div>
                  
                  <div className='formu flex-grow-1'>
                    <p className=' align-self-center text-center text-info'>Agrega un personal</p>
                  <form className="  form p-2 " onSubmit={handleSubmit(addTrab)}>
                    
                  <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nombre" aria-label="Nombre"{...register('nombre',{required:'requerido'})}/>{!!errors.nombre && errors.nombre.message}
                    <span className="input-group-text">-</span>
                    <input type="text" className="form-control" placeholder="Apellido" aria-label="Apellido"{...register('apellido',{required:'requerido'})}/>{!!errors.apellido && errors.apellido.message}
                  </div>

                  <Opciones lista={ocupacion} etiqueta={true} nombre={'ocupacion'} register={register}/>

               <div className="input-group mb-3">
               <span className="input-group-text">$</span>
                    <input type="number" className="form-control" placeholder="Salario por dia" aria-label="Salario" 
                    {...register('salario',{required:'requerido'})} />
                    <span className="input-group-text">-</span>
                    <input type="number" className="form-control" placeholder="dias de trabajo" max={6} {...register('laborales',{required:'requerido'})}/>
                    {!!errors.laborales || !!errors.salario && errors.salario.message}
                  </div>
                  <button className='btn btn-success' type='submit'>Agregar</button>
                    
                  </form>
                   

                   <div className='lista overflow-auto p-2'>

                    {
                      trabajadores.length!==0?
                      trabajadores.map((t,i)=>(
                        <CardPersonal person={t.trabajadores!} key={i} delet={()=>dispatch(deletTrabajador(t.trabajadores?.id))} save={true}
                        add={()=>addpersonal(t.trabajadores!)}
                        estado={false}/>
                      ))
                      :<h4>no tiene personal</h4>
                    }

                   </div>
                  </div>

              </div>
             </div>
             <ModalI  modalIsOpen={modalIsOpen} closeModal={closeModal} titulo={'Agrega una cuadrilla'}>
              <FormsGeneral etiqueta={'Descrip'} addGeneral={addCuadri}/>
             </ModalI>
        </WorkLayout>
    );
}

export default PersonalPage;