import { createSlice } from "@reduxjs/toolkit";
import { IActividad } from '../../interfaces/models';
interface IActitvity{
    addActividad:(payload:any)=>void
    deletActividad:(payload:any)=>void
}
export const activitySlice= createSlice({
    name:'activity',
    initialState:{
        actividades:[] as IActividad[]
        
    },
    reducers:{
        addActividad:(state,action)=>{
           state.actividades=[...state.actividades,action.payload]
        },
        deletActividad:(state,action)=>{
            state.actividades=state.actividades.filter(e=>e.id!==action.payload)
        }
    }
})
export const {addActividad,deletActividad}=activitySlice.actions as IActitvity

