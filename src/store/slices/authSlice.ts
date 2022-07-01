import { createSlice } from "@reduxjs/toolkit";
import { IAuth, IEtapa } from '../../interfaces/models';
interface IAutt{

    persona:IAuth
    islogin:boolean
};
const INICIAL:IAuth={nombre:"",msg:"",id:"",email:""}
export const authSlice= createSlice({
    name:'auth',
    initialState:{
        persona:INICIAL,
        islogin:false
        
    }as IAutt,
    reducers:{
        setMensaje:(state,action)=>{
          state.persona.msg=action.payload
        },
        setUser:(state,action)=>{
            state.islogin=true
            state.persona={...action.payload,msg:"Registrado"}as IAuth
            console.log(state.islogin);
        },
        logout:(state,action)=>{
            state.islogin=false
            state.persona=INICIAL
        }
    }
})
export const {setMensaje,setUser,logout}=authSlice.actions

