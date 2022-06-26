import React from 'react';
interface Prop{
  salario:boolean
}
function Item1({salario}:Prop) {
    return (
        <div className="card">
                      
        <div className="card-body">
          <div className="card-title d-flex flex-direction-column">
          <h4 >Title</h4>
          {!salario?<input type="number" placeholder='cantidad'/>:null}
          
          <button className='btn btn-danger '>delet</button>
          </div>
          {salario?<p className="card-text">salario:$250</p>:null}
          
        </div>
      </div>
    );
}

export default Item1;