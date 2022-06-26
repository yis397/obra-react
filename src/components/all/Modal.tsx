import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import DatePicker  from 'react-datepicker';
import Opciones from './Opciones';
import { useForm } from 'react-hook-form';


Modal.setAppElement('#root');
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  
  interface Prop{
    modalIsOpen:boolean,
    closeModal:()=>void,
    tipo:number,
    titulo:string
    etiqueta:string
  }
  type FormData = {
    nombre    : string;
    apellido   : string;
    ocupacion: string;
    salario: string;
    disLabor: string;
  
  };
function ModalI({modalIsOpen,closeModal,tipo,titulo,etiqueta}:Prop) {
  let subtitle:any;
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color= '#f00';
  }

  
  return (
  
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>{titulo}</h2>
        
        <form className=' form-control'>
                  <div className="mt-2 mb-3">
                    <input type="text" className="form-control is-valid" id="validationServer01" required placeholder='titulo'/>
                    <span>requerido</span>
                   <div className="input-group">
                   <span className="input-group-text">{etiqueta}</span>
                   
                   <textarea className="form-control" aria-label="With textarea"></textarea>
                 </div>
                   </div>
                 {
                  tipo==1?<>
                  <div>
                    <label htmlFor="inicio" className='text-bg-info fw-bold'> Inicio</label>
                    <input type="date" name="fecha" id="inicio"  />
                    <label htmlFor="final" className='text-bg-info fw-bold'> Final Programado</label>
                    <input type="date" name="fecha" id="final"/>
                 </div>
                 <div>
                  <Opciones lista={["1"]} etiqueta={false} nombre={'Cuadrilla'} register={register}/>
                  <Opciones lista={["1"]} etiqueta={false} nombre={'Concepto'} register={register}/>
                 </div>
                  </>:null
                 }


                 <div>
                    <button  className="btn btn-danger"  onClick={closeModal}>Cancelar</button>
                    <button type="submit" className="btn btn-success">Agregar</button>
                 </div>
        </form>
      </Modal>
 
  );
}


export default ModalI;

