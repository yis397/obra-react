import React from 'react';
import WorkLayout from '../components/layout/WorkLayout';
import {FormsGeneral, Item1, ModalI, Opciones} from '../components/all';

function MaterialPage() {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const addMaterial=(data:any)=>{
       console.log(data)
    }
      function closeModal() {
        setIsOpen(false);
      }
    return (
        <WorkLayout>
            <div className="row h-100">
              <div className="cuadr col-4 align-items-center d-flex flex-column w-100%  ">
                <h2 >Tus Coneptos</h2>
                <button className='btn btn-success' onClick={()=>setIsOpen(true)}>Agrega</button>
              </div>
               
              <div className="inf d-flex  flex-direction-column col-8 w-100% p-3">
                
                  <div className='flex-grow-0 w-50'>
                  <h2 className=' text-info text h3'>Materiales por concepto</h2>
                  <button className='btn btn-success' onClick={()=>setIsOpen(true)}>Agrega</button>
                  <div className='lista h-50
                   overflow-auto'>
                  <Item1 salario={false}/>
                  </div>
                  <div className='total  text-center w-100'>
                    <button className='btn btn-success'>Aceptar</button>
                  </div>
                  </div>
                  
                  <div className='formu flex-grow-1'>
                  <form className="  form p-2 ">
                    
                  <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nombre" aria-label="Nombre"/>
                    <span className="input-group-text">-</span>
                    <input type="text" className="form-control" placeholder="unidad" aria-label="unidad"/>
                  </div>

               <div className="input-group mb-3">
               <span className="input-group-text">$</span>
                    <input type="number" className="form-control" placeholder="Precio" aria-label="Precio"/>
                    <span className="input-group-text">-</span>
                    <input type="text" className="form-control" placeholder="marca" aria-label="marca" />
                  </div>
                  <button className='btn btn-success' onClick={()=>setIsOpen(true)}>Aceptar</button>
                    
                  </form>
                   

                   <div className='lista overflow-auto h-50 p-2'>
                   <Item1 salario={true}/>
                   </div>
                  </div>

              </div>
             </div>
             <ModalI modalIsOpen={modalIsOpen} closeModal={closeModal} titulo={'Agrega un concepto'}>
              <FormsGeneral etiqueta='Un' addGeneral={addMaterial}/>
             </ModalI>
        </WorkLayout>
    );
}

export default MaterialPage;