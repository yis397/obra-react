import React from 'react';
import { useForm } from 'react-hook-form'
import { CardPersonal, FormsGeneral, Opciones,CardCuadrilla } from '../components/all';
import ModalI from '../components/all/Modal';
import WorkLayout from '../components/layout/WorkLayout';
import { useAppSelector,useAppDispatch } from '../store/hooks';
import { addTrabajador, deletTrabajador,addCuadrilla, updateCuadrilla, deletCuadrilla, activarDis } from '../store/slices';
import { ITrabajador, ICuadrilla, IAuth } from '../interfaces/models';
import { upFTrabajado, upFCuadrilla } from '../store/slices/thunksWork';



type FormData = {
  nombre    : string;
  apellido   : string;
  ocupacion: string;
  salario: string;
  laborales: string;

}
const ocupacion=['Peon','Albañil','Fontanero','Electricista','Arquitecto','IngCivil']
function PersonalPage({persona}:{persona:IAuth}) {

  const [personal, setPersonal] = React.useState<ITrabajador[]>([]);
  const idSelect = React.useRef<ICuadrilla>();
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const { register, handleSubmit,reset, formState: { errors } } = useForm<FormData>(); 
  const {trabajadores,cuadrilla,isActivo}=useAppSelector((state)=>state.insumos)
  const dispatch = useAppDispatch()
  React.useEffect(() => {
    if (isActivo) {
      
      dispatch(upFTrabajado(persona.id,trabajadores))
    }
  }, [trabajadores]);
  React.useEffect(() => {
    if (isActivo) {
      dispatch(upFCuadrilla(persona.id,cuadrilla))
    }
  }, [cuadrilla]);
  const addTrab=(data:FormData)=>{
    dispatch(activarDis())
    const id=new Date().valueOf().toString();
    const salario=parseFloat(data.salario)
    dispatch(addTrabajador({...data,id,salario,salarioSem:salario * parseFloat(data.laborales) }as ITrabajador))
    reset()
  }
  const deletTrCuad=(id:string)=>{
    const newList=personal.filter(e=>e.id!==id)
    setPersonal([...newList])
  }
  const addCuadri=(data:any)=>{
    dispatch(activarDis())
    const id=new Date().valueOf().toString();
    dispatch(addCuadrilla({...data,id}as ICuadrilla))
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
    if(exist || !idSelect.current?.id)return;
    setPersonal([...personal,t])
  }
  const upCuadrilla=()=>{

    const price =personal.map(item => item.salarioSem).reduce((prev, curr) => prev + curr, 0);
    const ids=personal.map(e=>e.id)
    dispatch(updateCuadrilla({...idSelect.current,trabajadores:personal,costo:price,trabajadoresID:ids}as ICuadrilla))
  }
      function closeModal() {
        setIsOpen(false);
      }
    return (
        <WorkLayout>
            <div className="row h-100" >
              <div className="cuadr col-md-4 col-sm-12 align-items-center d-flex flex-column ">
                <h2 >Tus cuadrillas</h2>
                <button className='btn btn-success' onClick={()=>setIsOpen(true)}>Agregar</button>
                <div className='lista d-flex flex-sm-row flex-md-column w-100'>
                {
                    cuadrilla.map(e=>(
                      <div  key={e.id} onClick={()=>select(e)} className='btn w-100'>
                        <CardCuadrilla delet={()=>dispatch(deletCuadrilla(e.id))}  person={e} 
                      />
                      </div>
                        
                    ))
                  }
                </div>
              </div>
               
              <div className="inf col-md-4 col-sm-12 p-3" >
                
                  <div className='datos flex-grow-0 w-100'>
                  <p className=' text-info text  text-center'>Tus Trabajadores</p>
                  <div className='lista 
                   overflow-auto'>
                  {
                    personal.map(e=>(
                      <div className='m-2'>
                        <CardPersonal delet={()=>deletTrCuad(e.id)} save={false} person={e} key={e.id}
                        />

                      </div>
                    ))
                  }
                  </div>
                  <div className='total  text-center w-100 flex-column d-flex'>
                    <p className=' text-bg-light h5'>Total $ por semana:</p>
                    <p className='btn text-bg-primary'>${idSelect.current?.costo}</p>
                    <button className='btn btn-success' onClick={()=>upCuadrilla()}>Aceptar cambios</button>
                  </div>
                  </div>
              </div>


              <div className='formu col-md-4 col-sm-12'>
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
                   

                   <div className='lista p-2 '>

                    {
                      trabajadores.length!==0?
                      trabajadores.map((t,i)=>(
                        <div>

                          <CardPersonal person={t} key={i} delet={()=>dispatch(deletTrabajador(t.id))} save={true}
                          add={()=>addpersonal(t)}
                          estado={false}/>
                        </div>
                      ))
                      :<h4>no tiene personal</h4>
                    }

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