import { createSlice } from "@reduxjs/toolkit";
import { IActividad, IEtapa } from '../../interfaces/models';
interface IActitvity{
    actividades:IActividad[]
    etapas:IEtapa[]
}
export const activitySlice= createSlice({
    name:'activity',
    initialState:{
        actividades:[],
        etapas:[]
        
    }as IActitvity,
    reducers:{
        addActividad:(state,action)=>{
           
           state.actividades=[...state.actividades,action.payload]
           
        },
        deletActividad:(state,action)=>{
            state.actividades=state.actividades.filter(e=>e.id!==action.payload)
        },
        addEtapa:(state,action)=>{
          state.etapas=[...state.etapas,action.payload]
        },
        deletEtapa:(state,action)=>{
            state.etapas=state.etapas.filter(e=>e.id!==action.payload)
        },
        updateEtapa:(state,action)=>{
            const search = (e:IEtapa) => e.id === action.payload.id;
            const i =state.etapas.findIndex(search)
            state.etapas[i]=action.payload
        }
    }
})
export const {addActividad,deletActividad}=activitySlice.actions

