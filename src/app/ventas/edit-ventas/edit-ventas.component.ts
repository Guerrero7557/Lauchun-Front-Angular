import { Component, OnInit } from '@angular/core';
import { VentaService } from 'src/app/Service/venta/venta.service';
import { Venta } from 'src/app/Models/Venta';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/Service/usuario/usuario.service';
import { Usuario } from 'src/app/Models/Usuario';
import { TipoPago } from 'src/app/Models/TipoPago';
import { TipopagoService } from 'src/app/Service/tipopago/tipopago.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-ventas',
  templateUrl: './edit-ventas.component.html',
  styleUrls: ['./edit-ventas.component.css']
})
export class EditVentasComponent implements OnInit {

  ventas:Venta []=[]
  usuarios:Usuario []=[]
  tipopagos:TipoPago[]=[]

  public venta :Venta = new Venta();
  public usuario:Usuario = new Usuario()
  public tipopago :TipoPago = new TipoPago()

  constructor(private ventaService:VentaService, private router: Router, private usuarioService :UsuarioService, private tipopagoService:TipopagoService){

  }

  ngOnInit(){

    this.Editar();

    this.usuarioService.getUsuario().subscribe(
      usuariosMetodo=>{
      this.usuarios=usuariosMetodo;
      }
    ); 

    this.tipopagoService.getTipoPagos().subscribe(
      tipopagosMetodo=>{
      this.tipopagos=tipopagosMetodo;
      }
    );

    
  }

  Editar(){
    let idventa=localStorage.getItem("idventa"); 
    this.ventaService.getVentaId(+idventa!)
    .subscribe(data=>{
      this.venta=data;
    })
  }



  actualizarVenta(venta:Venta){
    this.ventaService.actualizarVenta(venta)
    .subscribe(data=>{
      this.venta = data    
    })
    Swal.fire("Informacion", "Se actualizó con éxito","success") 
    this.router.navigate(["ventas"])
  }

  A

}
