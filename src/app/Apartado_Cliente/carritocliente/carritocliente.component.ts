import { formatDate } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Carrito } from 'src/app/Models/Carrito';
import { DetalleVenta } from 'src/app/Models/DetalleVenta';
import { TipoPago } from 'src/app/Models/TipoPago';
import { Usuario } from 'src/app/Models/Usuario';
import { Venta } from 'src/app/Models/Venta';
import { CarritoService } from 'src/app/Service/carrito/carrito.service';
import { DetalleventaService } from 'src/app/Service/detalleventa/detalleventa.service';
import { TipopagoService } from 'src/app/Service/tipopago/tipopago.service';
import { VentaService } from 'src/app/Service/venta/venta.service';
import Swal from 'sweetalert2';

//declare var paypal;



@Component({
  selector: 'app-carritocliente',
  templateUrl: './carritocliente.component.html',
  styleUrls: ['./carritocliente.component.css']
})
export class CarritoclienteComponent implements OnInit {

  /**@ViewChild('paypal',{static:true}) paypalElement:ElementRef;

  producto={
    descripcion: 'producto',
    precio: 10.00,
    img: 'imagen'
  } 

  title='paypal-pago';
*/
  public elementoscarrito: Carrito[] = []

  public elementosventa: Venta[] = []

  public carrito: Carrito = new Carrito()

  public venta:Venta= new Venta()

  public tipopago :TipoPago= new TipoPago()

  

  today = new Date();
  cValue = formatDate(this.today, 'yyyy-MM-dd', 'en-US');

  subtotal: number = 0
  total: number = 0
  numeroitems:number = 0
  cantidad:number

  idventa:number
  usuario :Usuario 
  

  constructor(private router: Router, 
    private carritoservice: CarritoService, 
    private ventaService:VentaService,
    private detalleventaService:DetalleventaService,
    private tipopagoservice:TipopagoService) {}

  ngOnInit() {

    this.usuario =JSON.parse(localStorage.getItem("usuario"))

    this.carritoservice.getCarritoxcliente(this.usuario.idusuario).subscribe(
      u => {
        this.elementoscarrito = u;
        this.numeroitems = this.elementoscarrito.length
        console.log(this.numeroitems)
        this.elementoscarrito.forEach(element => {
          this.total +=+  element.montoprod  });
      })
      this.tipopagoservice.getTipoPagosId(1).subscribe(d=>{
        this.tipopago=d        
     })

     this.ventaService.getVenta().subscribe(data=>{
      this.elementosventa = data
      if(this.elementosventa == null){
        this.idventa = 1
      }else{
        this.idventa =this.elementosventa.length +1
      }      
     })

     /** 

     //=====PAYPAL=========

     paypal
    .Buttons({
      createorder:(data,actions)=>{
        return actions.order.create({
          purchase_units:[{
            description:this.producto.descripcion,
            amount:{              
              value:10
            }
          }
           ]
        })
      },
      onApprove: async(data,actions)=> {
        const order= await actions.order.capture();        
        console.log(order);
      },
      OnError:error => {
        console.log(error);
      }
    })
    .render(this.paypalElement.nativeElement);
    */

  }

  eliminarItem(item: Carrito) {
    let montoproducto = item.montoprod     
    this.carritoservice.deleteRegistroCarrito(item.idcarrito).subscribe(
      data => {   
        this.carritoservice.getCarritoxcliente(this.usuario.idusuario).subscribe(
          u => {
            this.elementoscarrito = u;
            this.numeroitems = this.elementoscarrito.length                           
          })
      }      
    )
    this.elementoscarrito = this.elementoscarrito.filter(c=>c.idcarrito!==item.idcarrito);
    this.total -=montoproducto    
  }

  VaciarItems() {
    if (confirm("¿Estás seguro de que desea vaciar su carrito de compras?")) {
      this.carritoservice.deleteCarrito(this.usuario.idusuario).subscribe(
        data => { }
      )
      this.elementoscarrito = [];
    } else {
      console.log('se canceló la operacion')
    }
  }

  updateitem(item: Carrito) {  
    if(item.cantidad > 0 && item.cantidad < 100  &&item.idproducto.stock > item.cantidad){      
      let valor = item.montoprod / item.idproducto.precio     
      item.montoprod = item.cantidad * item.idproducto.precio
    this.carritoservice.updateCarrito(item).subscribe(
      ()=>{       

        if(valor<item.cantidad){
            this.total+=item.idproducto.precio           
        }else{          
            this.total-= item.idproducto.precio           
        }  

      }
    )    
    } else{
     let val = item.montoprod / item.idproducto.precio
     item.cantidad = val
    this.carritoservice.updateCarrito(item).subscribe(
      data=>{}
    )
    window.location.reload()
    }    
  }

 ircatalogo(){
 this.router.navigate(['catalogo'])
}

irboleta(){
  this.router.navigate(['boleta'])
}
 //===========================================APARTADO DE GENERACION DE VENTA======================

 AgregarVenta(venta:Venta){

  venta.idusuario= this.usuario
  venta.idtipopago= this.tipopago
  venta.fechaventa = this.cValue
  venta.montototalv = this.total
  venta.estado = true
  
  console.log(venta)
  //this.ventaService.createVenta(venta)
  
  this.ventaService.createVenta(venta)
    .subscribe(()=>{      
      Swal.fire("Informacion", "Se registró con éxito","success")
      
      
    }) 
    this.elementoscarrito.forEach(element => {
      this.AgregarDetalleventa(element)
    });
    this.carritoservice.deleteCarrito(this.usuario.idusuario).subscribe(
      () => { }
    )
    this.elementoscarrito = [];
    this.router.navigate(["boleta"])


 }
AgregarDetalleventa( element:Carrito){
  let venta 
  let detalleventa :DetalleVenta  = new DetalleVenta()

  this.ventaService.getVentaId(this.idventa).subscribe(v=>{
   
    venta = v    
    detalleventa.idventa = venta
     detalleventa.idproducto = element.idproducto
     detalleventa.cantidad = element.cantidad
     detalleventa.precioventa = element.idproducto.precio
 
  this.detalleventaService.createDetalleVenta(detalleventa)
  .subscribe(()=>{     
    
  })
  })
  
}




}
