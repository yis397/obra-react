import React from 'react';
import { Opciones } from '../components/all';
import ModalI from '../components/all/Modal';
import WorkLayout from '../components/layout/WorkLayout';

function PersonalPage() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
    
      function closeModal() {
        setIsOpen(false);
      }
    return (
        <WorkLayout>
            <div className="row h-100">
              <div className="cuadr col-4 align-items-center d-flex flex-column w-100%  ">
                <h2 >Tus cuadrillas</h2>
                <button className='btn btn-success' onClick={()=>setIsOpen(true)}>Agrega</button>
              </div>
               
              <div className="inf d-flex  flex-direction-column col-8 w-100% p-3">
                
                  <div className='flex-grow-0 w-50'>
                  <h2 className=' text-info text h3'>Tus Trabajadores</h2>
                  <button className='btn btn-success' onClick={()=>setIsOpen(true)}>Agrega</button>
                  <div className='lista h-50
                   overflow-auto'>
                  <Opciones etiqueta={false} nombre={'Trabajador'} />
                  </div>
                  <div className='total  text-center w-100'>
                    <p className=' text-bg-light'>Total $ por semana:</p>
                    <p className='btn text-bg-primary'>$2500</p>
                  </div>
                  </div>
                  
                  <div className='formu flex-grow-1'>
                  <form className="  form p-2 ">
                    
                  <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nombre" aria-label="Nombre"/>
                    <span className="input-group-text">-</span>
                    <input type="text" className="form-control" placeholder="Apellido" aria-label="Apellido"/>
                  </div>

                  <Opciones etiqueta={true} nombre={'Ocupacion'}/>

               <div className="input-group mb-3">
               <span className="input-group-text">$</span>
                    <input type="number" className="form-control" placeholder="Salario por dia" aria-label="Salario"/>
                    <span className="input-group-text">-</span>
                    <input type="number" className="form-control" placeholder="dias de trabajo" aria-label="dias" max={6}/>
                  </div>
                  <button className='btn btn-success' onClick={()=>setIsOpen(true)}>Aceptar</button>
                    
                  </form>
                   

                   <div className='lista overflow-auto h-50 p-2'>

                    <div className="card">
                      
                      <div className="card-body">
                        <div className="card-title d-flex">
                        <h4 >Title</h4>
                        <button className='btn btn-danger flex-direction-column'>delet</button>
                        </div>
                        <p className="card-text">salario:$250</p>
                      </div>
                    </div>

                   </div>
                  </div>

              </div>
             </div>
             <ModalI tipo={2} modalIsOpen={modalIsOpen} closeModal={closeModal} titulo={'Agrega una cuadrilla'} etiqueta={'Descrip'} />
        </WorkLayout>
    );
}

export default PersonalPage;