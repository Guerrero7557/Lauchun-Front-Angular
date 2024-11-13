import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Carrito } from 'src/app/Models/Carrito';
import { Producto } from 'src/app/Models/Producto';
import { Usuario } from 'src/app/Models/Usuario';
import { CarritoService } from 'src/app/Service/carrito/carrito.service';
import { ProductoService } from 'src/app/Service/producto/producto.service';
import { UsuarioService } from 'src/app/Service/usuario/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalleproducto',
  templateUrl: './detalleproducto.component.html',
  styleUrls: ['./detalleproducto.component.css'],
})
export class DetalleproductoComponent {
  public producto: Producto = new Producto();
  public usuario: Usuario = new Usuario();
  public carrito: Carrito = new Carrito();
   carritoitems: Carrito[] = [];

  public cantidad: number = 1;

  randomNumbers = [];
  productosuge: Producto[] = [];

  constructor(
    private productoService: ProductoService,
    private router: Router,
    private carritoservice: CarritoService,
    private usuarioservice: UsuarioService
  ) {}

  ngOnInit() {
    this.listarProducto(JSON.parse(localStorage.getItem('idproducto')));
    this.cargarprod();

    this.randomNumbers.forEach((element) => {
      this.productoService.getProductoId(element).subscribe((u) => {
        this.productosuge.push(u);
      });
    });

    this.usuario = this.usuario = JSON.parse(localStorage.getItem('usuario'));
  }

  listarProducto(id: number) {
    this.productoService.getProductoId(id).subscribe((productosMetodo) => {
      this.producto = productosMetodo;
    });
  }

  guardarproducto(carrito: Carrito) {
    carrito.idusuario = this.usuario;
    carrito.idproducto = this.producto;
    carrito.cantidad = this.cantidad;
    carrito.montoprod = this.producto.precio * carrito.cantidad;

    if (this.producto.stock > this.cantidad) {
      this.carritoservice
        .getCarritoxcliente(this.usuario.idusuario)
        .subscribe((dt) => {
          this.carritoitems = dt;
          
          if(this.carritoitems.length===0){
            this.carritoservice.createItemCarrito(carrito).subscribe(() => {
              Swal.fire(
                'Informacion',
                'Se agregó al carrito con éxito',
                'success'
              );
            });
          }else{
            this.carritoitems.forEach((element) => {
              if (carrito.idproducto.idproducto != element.idproducto.idproducto ) {
                this.carritoservice.createItemCarrito(carrito).subscribe(() => {
                  
                  Swal.fire(
                    'Informacion',
                    'Se agregó al carrito con éxito',
                    'success'
                  );
                  
                });
              }else{
                element.cantidad += carrito.cantidad
                this.carritoservice.updateCarrito(element).subscribe(() => {
                  Swal.fire(
                    'Informacion',
                    'Se Actualizó el carrito con éxito',
                    'success'
                  );
                })
              }
            });
          }          
        });
    } else {
      Swal.fire(
        'Advertencia',
        'Se Alcanzo el limite de stock del producto',
        'warning'
      );
    }
  }

  // Intento 2 para lograr el correcto funcionamiento del carrito 
  /**
   *  guardarproducto(carrito: Carrito) {
    carrito.idusuario = this.usuario;
    carrito.idproducto = this.producto;
    carrito.cantidad = this.cantidad;
    carrito.montoprod = this.producto.precio * carrito.cantidad;

    if (this.producto.stock > this.cantidad) {
      this.carritoservice
        .getCarritoxcliente(this.usuario.idusuario)
        .subscribe((dt) => {
          this.carritoitems = dt;
          
          if(this.carritoitems.length>=1 ){
            this.carritoitems.forEach((element) => {
              if (carrito.idproducto.idproducto != element.idproducto.idproducto ) {
                this.carritoservice.createItemCarrito(carrito).subscribe(() => {
                  Swal.fire(
                    'Informacion',
                    'Se agregó al carrito con éxito',
                    'success'
                  );
                });
              }else{
                element.cantidad += carrito.cantidad
                this.carritoservice.updateCarrito(element).subscribe(() => {
                  Swal.fire(
                    'Informacion',
                    'Se Actualizó el carrito con éxito',
                    'success'
                  );
                })
              }
            });
          }else{            
              this.carritoservice.createItemCarrito(carrito).subscribe(() => {
                Swal.fire(
                  'Informacion',
                  'Se agregó al carrito con éxito',
                  'success'
                );
              });
            }
                   
        });
    } else {
      Swal.fire(
        'Advertencia',
        'Se Alcanzo el limite de stock del producto',
        'warning'
      );
    }
  }
   */

  cargarprod() {
    for (let i = 0; i < 3; i++) {
      const randomNumber = Math.floor(Math.random() * 29);
      this.randomNumbers.push(randomNumber);
    }
  }

  verdetalleProducto(id: number) {
    localStorage.setItem('idproducto', JSON.stringify(id));
    window.location.reload();
  }
}
