import { DetalleVenta } from "./DetalleVenta";

export class Boleta{
    public para!:string;
    public  nombreCliente!:string;  
    public  dni!:string;    
    public direccion!:string;
    public  email!:string; 
    public  telefono!:string; 
    public  numeroBoleta!:string; 
    public  fecha!:string;
    public  detalles!:DetalleVenta[];
    public  total!:number;   
}