import { createSlice } from "@reduxjs/toolkit";
import { IActividad, IEtapa } from '../../interfaces/models';
interface IActitvity{

    etapas:IEtapa[]
}

export const activitySlice= createSlice({
    name:'activity',
    initialState:{
        etapas:[]
        
    }as IActitvity,
    reducers:{
        addEtapa:(state,action)=>{
          state.etapas=[...state.etapas,action.payload]
        },
        deletEtapa:(state,action)=>{
            state.etapas=state.etapas.filter(e=>e.id!==action.payload)
        },
        addActividad:(state,action)=>{
            const search = (e:IEtapa) => e.id === action.payload.id;
            const i =state.etapas.findIndex(search)
            state.etapas[i]=action.payload
        },
        deletActEtap:(state,action)=>{
            const{id,i}=action.payload as {i:number,id:string}
            state.etapas[i].actividades=state.etapas[i].actividades!.filter(e=>e.id!==id)
        }
    }
})
export const {addEtapa,deletEtapa,addActividad,deletActEtap}=activitySlice.actions

