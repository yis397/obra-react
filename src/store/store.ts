import { configureStore } from "@reduxjs/toolkit";
import { activitySlice } from './slices/activitySlice';
import { insumosSlice } from './slices/insumoSlice';

   

export const store=configureStore({
reducer:{
    actividades:activitySlice.reducer,
    insumos:insumosSlice.reducer
}
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch