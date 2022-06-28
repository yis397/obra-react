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
            state.trabajadores=state.trabajadores.filter(e=>e.id!==action.payload)

        },
        deletMaterial:(state,action)=>{
            state.materiales=state.materiales.filter(e=>e.id!==action.payload)
        },
        addConcepto:(state,action)=>{
            state.conceptos=[...state.conceptos,action.payload]
         },
         updateConcepto:(state,action)=>{
            const search = (e:IConcepto) => e.id === action.payload.id;
            const i =state.conceptos.findIndex(search)
            state.conceptos[i]=action.payload
         },
         deletConcepto:(state,action)=>{
            state.conceptos=state.conceptos.filter(e=>e.id!==action.payload.id)
        },
        addCuadrilla:(state,action)=>{
            state.cuadrilla=[...state.cuadrilla,action.payload]
         },
         updateCuadrilla:(state,action)=>{
            const search = (e:ICuadrilla) => e.id === action.payload.id;
            const i =state.cuadrilla.findIndex(search)

           
            state.cuadrilla[i]=action.payload
         },
         deletCuadrilla:(state,action)=>{
            state.cuadrilla=state.cuadrilla.filter(e=>e.id!==action.payload)
        },
    }
})
export const {updateConcepto,addTrabajador,addMaterial,deletTrabajador,deletMaterial,deletConcepto,addConcepto,addCuadrilla,deletCuadrilla,updateCuadrilla}=insumosSlice.actions 
