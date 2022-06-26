import React from 'react';
import { Actividad, HeadInicio } from '../components/all';
import WorkLayout from '../components/layout/WorkLayout';
import ModalI from '../components/all/Modal';

function InicioPage() {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
        console.log("modal")
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
                <button  className="btn btn-info " onClick={openModal}>Agrega una Actividad</button>
                <div className='lista ' >

                {
                    !modalIsOpen?
                    [1,2,3].map((e,i)=>(
                        <Actividad key={i}/>
                    )):null
                }
                </div>
                
                </div>
                <div  className='zindex-sticky'>

                <ModalI modalIsOpen={modalIsOpen} closeModal={closeModal} tipo={1} titulo={'Agrega una Actividad'} etiqueta={'Descrp'}/>
                </div>
                </div>

         </WorkLayout>
            
    );
}

export default InicioPage;