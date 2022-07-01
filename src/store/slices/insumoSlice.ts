import { createSlice } from "@reduxjs/toolkit";
import {  ITrabajador, IMaterial,IConcepto, ICuadrilla } from '../../interfaces/models';

interface IInsumosState {
    trabajadores:ITrabajador[],
        materiales: IMaterial[],
        conceptos: IConcepto[],
        cuadrilla: ICuadrilla[],
        isActivo:boolean
  }
export const insumosSlice= createSlice({
    name:'insumos',
    initialState:{
        trabajadores:[],
        materiales:[], 
        cuadrilla:[], 
        conceptos:[],
        isActivo:false
    }as IInsumosState,
    reducers:{
        addTrabajador:(state,action)=>{
            if(Array.isArray(action.payload)){
                state.trabajadores=action.payload
                return
            }
           state.trabajadores=[...state.trabajadores,action.payload]  
        },
        addMaterial:(state,action)=>{
            if(Array.isArray(action.payload)){
                state.materiales=action.payload
                return
            }

                state.materiales=[...state.materiales,action.payload]
            
         },
        deletTrabajador:(state,action)=>{
            state.isActivo=true
            state.trabajadores=state.trabajadores.filter(e=>e.id!==action.payload)

        },
        deletMaterial:(state,action)=>{
            state.isActivo=true
            state.materiales=state.materiales.filter(e=>e.id!==action.payload)
        },
        addConcepto:(state,action)=>{
            if(Array.isArray(action.payload)){
                state.conceptos=action.payload
                return
            }
            state.conceptos=[...state.conceptos,action.payload]
         },
         updateConcepto:(state,action)=>{
            state.isActivo=true
            const search = (e:IConcepto) => e.id === action.payload.id;
            const i =state.conceptos.findIndex(search)
            state.conceptos[i]=action.payload
         },
         deletConcepto:(state,action)=>{
            state.isActivo=true
            state.conceptos=state.conceptos.filter(e=>e.id!==action.payload.id)
        },
        addCuadrilla:(state,action)=>{

            if(Array.isArray(action.payload)){
                state.cuadrilla=action.payload
                return
            }
            state.cuadrilla=[...state.cuadrilla,action.payload]
         },
         updateCuadrilla:(state,action)=>{
            state.isActivo=true
            const search = (e:ICuadrilla) => e.id === action.payload.id;
            const i =state.cuadrilla.findIndex(search)

           
            state.cuadrilla[i]=action.payload
         },
         deletCuadrilla:(state,action)=>{
            state.isActivo=true
            state.cuadrilla=state.cuadrilla.filter(e=>e.id!==action.payload)
        },
        activarDis:(state)=>{
            state.isActivo=true
        }
    }
})
export const {updateConcepto,addTrabajador,addMaterial,deletTrabajador,deletMaterial,deletConcepto,addConcepto,addCuadrilla,deletCuadrilla,updateCuadrilla,activarDis}=insumosSlice.actions 
