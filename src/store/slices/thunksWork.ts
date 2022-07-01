import { db} from "../../firebase/fireConfig";
import { child, get, getDatabase, ref, set } from "firebase/database";
import { IMaterial, IConcepto, ITrabajador, ICuadrilla, IEtapa } from '../../interfaces/models';
import { useData } from "../../hooks/useData";
import { addConcepto, addCuadrilla, addMaterial,addEtapa, addTrabajador } from "./";




export const upFMaterial=(uid:string,materiales:IMaterial[])=>{
    return async(dispatch:any,getState:any)=>{
      console.log();
       localStorage.setItem('materiales',JSON.stringify(materiales))
     await set(ref(db, `users/${uid}/materiales`), {
            materiales
          });
     
    }}

export const upFConcepto=(uid:string,conceptos:IConcepto[])=>{
    return async(dispatch:any,getState:any)=>{
        localStorage.setItem('conceptos',JSON.stringify(conceptos))
     await set(ref(db, `users/${uid}/conceptos`), {
            
           conceptos
          });
     
    }}

export const upFTrabajado=(uid:string,trabajadores:ITrabajador[])=>{
    return async(dispatch:any,getState:any)=>{
        localStorage.setItem('trabajadores',JSON.stringify(trabajadores))
    
     await set(ref(db, `users/${uid}/trabajadores`), {
            
          trabajadores
          });
     
    }}
export const upFCuadrilla=(uid:string,cuadrillas:ICuadrilla[])=>{
    localStorage.setItem('cuadrillas',JSON.stringify(cuadrillas))

    return async(dispatch:any,getState:any)=>{
     const lista:ICuadrilla[]=cuadrillas.map(e=>{
      return {...e,trabajadores:[]}
     })
     await set(ref(db, `users/${uid}/cuadrillas`), {
            
      cuadrillas:lista
          });
     
    }}
export const upFActividad=(uid:string,etapas:IEtapa[])=>{
    return async(dispatch:any,getState:any)=>{
        localStorage.setItem('etapas',JSON.stringify(etapas))
    
     await set(ref(db,`users/${uid}/etapas`), {
            
        etapas
          });
     
    }}
export const getFDatos=(uid:string)=>{
    return async(dispatch:any,getState:any)=>{
      const datos=['materiales','conceptos','cuadrillas','etapas','trabajadores']
      const disp=[addMaterial,addConcepto,addCuadrilla,addEtapa,addTrabajador]
      
     if (localStorage.getItem('trabajadores')) {
      const lista=useData(datos)
      ///'conceptos','materiales','trabajadores','cuadrillas','etapas'
        for (let i = 0; i < lista.length; i++) {
         if (lista[i]||lista[i]!==null) {
          await dispatch(disp[i](lista[i]))
         }
        }
     }else{

       get(child(ref(db), `users/${uid}`)).then(async (snapshot) => {
         if (snapshot.exists()) {
          for (let i = 0; i < datos.length; i++) {
            if (snapshot.val()[datos[i]]!==undefined) {

             localStorage.setItem(datos[i],JSON.stringify(snapshot.val()[datos[i]][datos[i]]))
             await dispatch(disp[i](snapshot.val()[datos[i]][datos[i]]))

            }
          }
           
         } else {
           console.log("No data available");
         }
       }).catch((error) => {
         console.error(error);
       });

     }
     
    }}



