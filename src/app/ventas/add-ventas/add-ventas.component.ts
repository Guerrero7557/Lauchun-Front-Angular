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
  selector: 'app-add-ventas',
  templateUrl: './add-ventas.component.html',
  styleUrls: ['./add-ventas.component.css']
})
export class AddVentasComponent implements OnInit {  
  usuarios:Usuario []=[]
  tipopagos:TipoPago[]=[]

  public venta :Venta = new Venta();
  public usuario:Usuario = new Usuario()
  public tipopago :TipoPago = new TipoPago()

  constructor(private ventaService:VentaService, private router: Router, private usuarioService :UsuarioService, private tipopagoService:TipopagoService){

  }

  ngOnInit(){
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



  AgregarVenta(venta:Venta){
    this.ventaService.createVenta(venta)
    .subscribe(data=>{      
      Swal.fire("Informacion", "Se registró con éxito","success")
      this.router.navigate(["ventas"])
    })
    console.log(venta)
  }
}
