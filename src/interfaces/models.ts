export interface IActividad{
    id:string
    nombre:string
    descripcion:string
    inicio:string
    final:string
    precio:number
    cuadrilla:string
    concepto:string
}
export interface IEtapa{
    id:string
    nombre:string 
    actividades?: IActividad[]
}
export interface ITrabajador{
    id:string
    nombre:string
    apellido:string
    salario:number
    salarioSem:number
    ocupacion:string
    laborales:string
}
export interface IConcepto{
    id:string
    nombre:string
    descripcion:string
    materiales?:IMatUso[]
    precio?:number
}
export interface IMatUso{
  id:string
  nombre:string
  precio:number
  cantidad?:number
}
export interface IMaterial{
    id:string
    nombre:string
    marca:string
    unidad:string
    precio:number
}
export interface ICuadrilla{
    id:string
    nombre:string
    trabajadores?:ITrabajador[]
    trabajadoresID?:string[]
    costo?:number
}
export interface IAuth{
    id:string
    nombre:string
    email:string
    msg:string
}