import { Component, OnInit ,ElementRef, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { DetalleVenta } from 'src/app/Models/DetalleVenta';
import {  Email } from 'src/app/Models/Email';
import { Venta } from 'src/app/Models/Venta';
import { DetalleventaService } from 'src/app/Service/detalleventa/detalleventa.service';
import { EmailService } from 'src/app/Service/email/email.service';
//import { EmailServiceBlt } from './EmailServiceBlt.service';
import { VentaService } from 'src/app/Service/venta/venta.service';

import { Boleta } from 'src/app/Models/Boleta';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-boleta',
  templateUrl: './boleta.component.html',
  styleUrls: ['./boleta.component.css'],
})
export class BoletaComponent implements OnInit {
  detalleventas: DetalleVenta[] = [];
  ventas: Venta[] = [];
  public email: Email = new Email();
  public boleta: Boleta = new Boleta();

  public venta: Venta = new Venta();

  public pago = 0;

  @ViewChild('content') content: ElementRef;

  constructor(
    private detalleservice: DetalleventaService,
    private ventaservice: VentaService,
    private router: Router,
    private emailService: EmailService    
  ) {   
  }

  ngOnInit(): void {
    this.ventaservice.getVenta().subscribe((ventas) => {
      this.ventas = ventas;
      let idventa = this.ventas.length;
      this.ventaservice.getVentaId(idventa).subscribe((v) => {
        this.venta = v;
      });
      this.listarDetalleVentasxid(idventa);
    });
  }

  listarDetalleVentasxid(id: number) {
    this.detalleservice
      .getDetallexIdVenta(id)
      .subscribe((detalleventasMetodo) => {
        this.detalleventas = detalleventasMetodo;
        detalleventasMetodo.forEach(element => {
          this.pago +=element.precioventa*element.cantidad
        });
      });
    //window.location.reload()
  }

  
  

  //este es el original
  enviarboleta2(boleta: Boleta) {
    boleta.para =  "harvey990819352@gmail.com" //this.venta.idusuario.email;    
    boleta.nombreCliente= this.venta.idusuario.nombre +" "+this.venta.idusuario.apellidos;
    boleta.direccion = this.venta.idusuario.direccion;
    boleta.email = boleta.para  
    boleta.dni = this.venta.idusuario.dni    
    boleta.numeroBoleta = "B00"+this.venta.idventa
    boleta.fecha = this.venta.fechaventa
    boleta.detalles = this.detalleventas
    boleta.total = this.venta.montototalv;
    
    this.emailService.enviarboleta(boleta).subscribe(() => {
      Swal.fire(
        'Informacion',
        'Se envió su boleta con exito,compruebe su correo',
        'success'
      );
      console.log(boleta);
      this.router.navigate(['catalogo']);
    });

}

}
