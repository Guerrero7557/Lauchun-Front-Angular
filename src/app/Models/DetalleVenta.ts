import { Producto } from "./Producto";
import { Venta } from "./Venta";

export class DetalleVenta{
    public iddetalle!: number;
    public idventa!: Venta;
    public idproducto!: Producto;
    public cantidad!: number;    
    public precioventa!: number;
    


}