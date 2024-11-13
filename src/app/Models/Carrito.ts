import { DecimalPipe } from "@angular/common";
import { Producto } from "./Producto";
import { Usuario } from "./Usuario";

export class Carrito{
    public idcarrito!:number;
    public idusuario!:Usuario;
    public idproducto!:Producto;
    public cantidad!:number;
    public montoprod!: number;
}