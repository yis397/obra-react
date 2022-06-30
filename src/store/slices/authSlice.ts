import { createSlice } from "@reduxjs/toolkit";
import { IAuth, IEtapa } from '../../interfaces/models';
interface IAutt{

    persona:IAuth
}

export const authSlice= createSlice({
    name:'auth',
    initialState:{
        persona:{isUser:false}
        
    }as IAutt,
    reducers:{
        
    }
})
export const {}=authSlice.actions

