import { createSlice } from "@reduxjs/toolkit";
import { IAuth, IEtapa } from '../../interfaces/models';
interface IAutt{

    persona:IAuth
};
const INICIAL:IAuth={isUser:false,nombre:"",msg:"",id:"",email:""}
export const authSlice= createSlice({
    name:'auth',
    initialState:{
        persona:INICIAL
        
    }as IAutt,
    reducers:{
        setMensaje:(state,action)=>{
          state.persona.msg=action.payload
        },
        setUser:(state,action)=>{
            state.persona={...action.payload,isUser:true,msg:"Registrado"}as IAuth
        },
        logout:(state,action)=>{
            state.persona=INICIAL
        }
    }
})
export const {setMensaje,setUser,logout}=authSlice.actions

