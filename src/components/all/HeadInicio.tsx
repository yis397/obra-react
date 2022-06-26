import React from 'react';

function HeadInicio() {
    return (
        <div className='etapas row-3'>
                <button type="button" className="btn btn-info rounded-5 ">add</button> 
                    <div className='lista'>
                    <button type="button" className="btn btn-secondary">Secondary</button> 

                    <button type="button" className="btn btn-secondary">Secondary</button>

                    <button type="button" className="btn btn-secondary">Secondary</button>

                    <button type="button" className="btn btn-secondary">Secondary</button> 
                    </div>

                    <div className="w-50 ms-5 ps-5" >
                <label form="validationServer01" className="form-label">Agrega una etapa</label>
                 <input type="text" className="form-control is-valid" id="validationServer01" required placeholder='Nombre'/>
                 <button type="button" className="btn btn-secondary">Ok</button> 
                </div>

                </div>
    );
}

export default HeadInicio;