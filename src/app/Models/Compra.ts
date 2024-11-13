import { DecimalPipe } from "@angular/common";
import { Proveedor } from "./Proveedor";

export class Compra{
    public idcompra!:number;
    public idproveedor!:Proveedor;
    public fechacompra!:Date;
    public numerocomprobante!: number;
    public montototalc!:number;
    public estado!: boolean;    
}