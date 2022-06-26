export interface IActividad{
    id:string
    titulo:string
    actividad:string
    inicio:string
    final:string
    cuadrilla:ITrabajador[]

}
export interface ITrabajador{
    id:string
    nombre:string
    apellido:string
    salario:string
    ocupacion:string
    laborales:string
}
export interface IConcepto{
    id:string
    nombre:string
    materiales:IMatUso[]
}
export interface IMatUso{
  id:string
  material:IMaterial
  cantidad:number
}
export interface IMaterial{
    id:string
    nombre:string
    marca:string
    unidad:string
    precio:number
}