import { configureStore,applyMiddleware } from "@reduxjs/toolkit";
import thunk from 'redux-thunk'
import { authSlice,insumosSlice,activitySlice } from './slices';

   

export const store=configureStore({
reducer:{
    actividades:activitySlice.reducer,
    insumos:insumosSlice.reducer,
    auth:authSlice.reducer
}})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch