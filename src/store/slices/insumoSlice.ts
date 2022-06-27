import { createSlice } from "@reduxjs/toolkit";
import {  ITrabajador, IMaterial,IConcepto, ICuadrilla } from '../../interfaces/models';

interface IInsumosState {
    trabajadores:ITrabajador[],
        materiales: IMaterial[],
        conceptos: IConcepto[],
        cuadrilla: ICuadrilla[],
  }
export const insumosSlice= createSlice({
    name:'insumos',
    initialState:{
        trabajadores:[],
        materiales:[], 
        cuadrilla:[], 
        conceptos:[] 
    }as IInsumosState,
    reducers:{
        addTrabajador:(state,action)=>{
           state.trabajadores=[...state.trabajadores,action.payload]
        },
        addMaterial:(state,action)=>{
            state.materiales=[...state.materiales,action.payload]
         },
        deletTrabajador:(state,action)=>{
            state.trabajadores=state.trabajadores.filter(e=>e.trabajadores?.id!==action.payload)

        },
        deletMaterial:(state,action)=>{
            state.materiales=state.materiales.filter(e=>e!==action.payload)
        },
        addConcepto:(state,action)=>{
            state.conceptos=[...state.conceptos,action.payload]
         },
         deletConcepto:(state,action)=>{
            state.conceptos=state.conceptos.filter(e=>e.id!==action.payload)
        },
        addCuadrilla:(state,action)=>{
            state.cuadrilla=[...state.cuadrilla,action.payload]
         },
         updateCuadrilla:(state,action)=>{
            const search = (e:ICuadrilla) => e.cuadrilla?.id === action.payload.cuadrilla.id;
            const i =state.cuadrilla.findIndex(search)

           
            state.cuadrilla[i].cuadrilla=action.payload.cuadrilla
         },
         deletCuadrilla:(state,action)=>{
            state.cuadrilla=state.cuadrilla.filter(e=>e.cuadrilla?.id!==action.payload)
        },
    }
})
export const {addTrabajador,addMaterial,deletTrabajador,deletMaterial,deletConcepto,addConcepto,addCuadrilla,deletCuadrilla,updateCuadrilla}=insumosSlice.actions 
