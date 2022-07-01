
export const useData=(nombres:string[])=>{
    let lista:any[]=new Array(nombres.length);
  
        for (let i = 0; i < nombres.length; i++) {
            lista[i]=JSON.parse(localStorage.getItem(nombres[i])!)
        }   
    
    return lista
}