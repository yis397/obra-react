import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import DatePicker  from 'react-datepicker';
import Opciones from './Opciones';
import { FieldValues, useForm } from 'react-hook-form';


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
    titulo:string,
    closeModal:()=>void,
    children:JSX.Element
  }
 
function ModalI({modalIsOpen,closeModal,titulo,children}:Prop) {
  let subtitle:any;
  
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
        {children}
        
        <button  className="btn btn-danger"  onClick={closeModal}>Cancelar</button>
      </Modal>
 
  );
}


export default ModalI;

