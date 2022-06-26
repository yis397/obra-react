import { configureStore } from "@reduxjs/toolkit";
import { activitySlice } from './slices/activitySlice';
import { insumosSlice } from './slices/insumoSlice';


export const store=configureStore({
reducer:{
    actividades:activitySlice.reducer,
    insumos:insumosSlice.reducer
}
})
