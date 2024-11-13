import { DecimalPipe } from "@angular/common";
import { Compra } from "./Compra";
import { Producto } from "./Producto";

export class DetalleCompra{
    public iddetallecom!: number;
    public idcompra!: Compra;
    public idproducto!: Producto;
    public costo!: number;
    public cantidad!:number;
} 

