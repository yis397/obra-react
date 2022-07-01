import { createSlice } from "@reduxjs/toolkit";
import { IActividad, IEtapa } from '../../interfaces/models';
interface IActitvity{

    etapas:IEtapa[]
    isActivo:boolean
}

export const activitySlice= createSlice({
    name:'activity',
    initialState:{
        etapas:[],
        isActivo:false
        
    }as IActitvity,
    reducers:{
        addEtapa:(state,action)=>{
            if(Array.isArray(action.payload)){
                state.etapas=action.payload
            }
          state.etapas=[...state.etapas,action.payload]
        },
        deletEtapa:(state,action)=>{
            state.isActivo=true
            state.etapas=state.etapas.filter(e=>e.id!==action.payload)
        },
        addActividad:(state,action)=>{
            state.isActivo=true
            const search = (e:IEtapa) => e.id === action.payload.id;
            const i =state.etapas.findIndex(search)
            state.etapas[i]=action.payload
        },
        deletActEtap:(state,action)=>{
            state.isActivo=true
            const search = (e:IEtapa) => e.id === action.payload.id;
            const i =state.etapas.findIndex(search)
            state.etapas[i]=action.payload
        },
        activarEt:(state)=>{
            state.isActivo=true

        }
    }
})
export const {addEtapa,deletEtapa,addActividad,deletActEtap,activarEt}=activitySlice.actions

