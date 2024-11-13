import { DecimalPipe } from "@angular/common";
import { TipoPago } from "./TipoPago";
import { Usuario } from "./Usuario";

export class Venta{
    public idventa!: number;
    public idusuario!: Usuario;
    public idtipopago!: TipoPago;
    public fechaventa!: string;
    public montototalv!: number;
    public estado!: boolean;
}