import { Categoria } from "./Categoria";
import { Marca } from "./Marca";

export class Producto{
    public idproducto!:number;
    public idcategoria!:Categoria  ;
    public idmarca!: Marca  ;
    public nombproducto!: string  ;
    public precio!: number  ;
    public stock!: number ;
    public descripcion!:string  ;
    public estado!: string ;
    public imagen!: string    
  
}