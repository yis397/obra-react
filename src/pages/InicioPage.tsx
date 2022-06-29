import React from 'react';
import { Actividad, FormsActividad, HeadInicio } from '../components/all';
import WorkLayout from '../components/layout/WorkLayout';
import ModalI from '../components/all/Modal';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { deletEtapa,addEtapa, addActividad, deletActEtap } from '../store/slices';
import { IActividad, IEtapa } from '../interfaces/models';

function InicioPage() {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [index, setindex] = React.useState(0);
    const dispatch = useAppDispatch()
    const {conceptos,cuadrilla}=useAppSelector((state)=>state.insumos)
    const {etapas}=useAppSelector((state)=>state.actividades)
    
    const selectE=(i:number)=>{
       setindex(i)
      
    }

    const addActivi=(data:any)=>{
      if (index===undefined)return
      const id=new Date().valueOf().toString();
      const concept=conceptos.find(e=>e.id===data.concepto)
      const cuadr=cuadrilla.find(e=>e.id===data.cuadrilla)
      const dias=(new Date(data.inicio).getTime()-new Date(data.final).getTime())/(1000*60*60*24)
      const precio=parseFloat(data.cantidad)*concept?.precio!+(cuadr?.costo!*(Math.trunc(dias/5)));
      const newActividad:IActividad={...data,precio,id,cuadrilla:data.cuadrilla,concepto:data.concepto}
      const newEtap:IEtapa={...etapas[0],actividades:[...(!etapas[0].actividades?[]:etapas[0].actividades), newActividad]}
      dispatch(addActividad(newEtap))
      closeModal()
      
    }
      const addEtap=(data:any)=>{
         const nombre=Object.fromEntries(new FormData(data.target)).nombre
         if ((nombre as string).length==0)return;
         const id=new Date().valueOf().toString()
         dispatch(addEtapa({nombre,id }as IEtapa))
         data.preventDefault()
      }
      function closeModal() {
        setIsOpen(false);
      }
    
    return (
         <WorkLayout>

                <div className='zindex-sticky'>

                <HeadInicio select={selectE} etapas={etapas} add={addEtap} delet={(id:string)=>dispatch(deletEtapa(id))}/>
                </div>
                <div className='activid row-6'>

                <div className=" list-group zindex-dropdown">
                <button  className="btn btn-info " onClick={()=>setIsOpen(true)}>Agrega una Actividad</button>
                <div className='lista' >

                {
                    !modalIsOpen?
                    <p style={{color:'ActiveBorder'}}>{etapas[index].actividades?.length}a</p>
                    :null
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