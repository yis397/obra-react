import { createSlice } from "@reduxjs/toolkit";
import {  ITrabajador, IMaterial,IConcepto } from '../../interfaces/models';

interface IInsumos{
    addTrabajador:(payload:any)=>void
    addMaterial:(payload:any)=>void
    deletTrabajador:(payload:any)=>void
    deletMaterial:(payload:any)=>void
    addConcepto:(payload:any)=>void
    deletConcepto:(payload:any)=>void
}
export const insumosSlice= createSlice({
    name:'insumos',
    initialState:{
        trabajadores:[] as ITrabajador[],
        materiales:[] as IMaterial[],
        conceptos:[] as IConcepto[],
    },
    reducers:{
        addTrabajador:(state,action)=>{
           state.trabajadores=[...state.trabajadores,action.payload]
        },
        addMaterial:(state,action)=>{
            state.materiales=[...state.materiales,action.payload]
         },
        deletTrabajador:(state,action)=>{
            state.trabajadores=state.trabajadores.filter(e=>e.id!==action.payload)
        },
        deletMaterial:(state,action)=>{
            state.materiales=state.materiales.filter(e=>e.id!==action.payload)
        },
        addConcepto:(state,action)=>{
            state.conceptos=[...state.conceptos,action.payload]
         },
         deletConcepto:(state,action)=>{
            state.conceptos=state.conceptos.filter(e=>e.id!==action.payload)
        },
    }
})
export const {addTrabajador,addMaterial,deletTrabajador,deletMaterial,deletConcepto,addConcepto}=insumosSlice.actions as IInsumos
