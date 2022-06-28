import React from 'react';
import { Actividad, FormsActividad, HeadInicio } from '../components/all';
import WorkLayout from '../components/layout/WorkLayout';
import ModalI from '../components/all/Modal';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { addActividad, deletActividad } from '../store/slices';
import { IActividad } from '../interfaces/models';

function InicioPage() {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const dispatch = useAppDispatch()
    const {conceptos,cuadrilla}=useAppSelector((state)=>state.insumos)
    const {actividades}=useAppSelector((state)=>state.actividades)
    
    const addActivi=(data:any)=>{
      const id=new Date().valueOf().toString();
       const concept=conceptos.find(e=>e.id===data.concepto)
       const cuadr=cuadrilla.find(e=>e.id===data.cuadrilla)
       const dias=(new Date(data.inicio).getTime()-new Date(data.final).getTime())/(1000*60*60*24)
       const precio=parseFloat(data.cantidad)*concept?.precio!+(cuadr?.costo!*(Math.trunc(dias/5)));
      dispatch(addActividad({...data,precio,id,cuadrilla:data.cuadrilla,concepto:data.concepto}as IActividad))
      closeModal()
    }
      function closeModal() {
        setIsOpen(false);
      }
    
    return (
         <WorkLayout>

                <div className='zindex-sticky'>

                <HeadInicio/>
                </div>
                <div className='activid row-6'>

                <div className=" list-group zindex-dropdown">
                <button  className="btn btn-info " onClick={()=>setIsOpen(true)}>Agrega una Actividad</button>
                <div className='lista ' >

                {
                    !modalIsOpen?
                    actividades.map((e)=>(
                        <Actividad actividad={e} key={e.id} delet={()=>dispatch(deletActividad(e.id))}/>
                    )):null
                }
                </div>
                
                </div>
                <div  className='zindex-sticky'>

                <ModalI modalIsOpen={modalIsOpen} closeModal={closeModal} titulo={'Agrega una Actividad'}>
                  <FormsActividad etiqueta='Desc' addGeneral={addActivi}/>
                </ModalI>
                </div>
                </div>

         </WorkLayout>
            
    );
}

export default InicioPage;