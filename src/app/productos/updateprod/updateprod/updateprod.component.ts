import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/Models/Categoria';
import { Marca } from 'src/app/Models/Marca';
import { Producto } from 'src/app/Models/Producto';
import { CategoriaService } from 'src/app/Service/categoria/listar-cat/categoria.service';
import { MarcaService } from 'src/app/Service/marca/marca.service';
import { ProductoService } from 'src/app/Service/producto/producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updateprod',
  templateUrl: './updateprod.component.html',
  styleUrls: ['./updateprod.component.css']
})
export class UpdateprodComponent implements OnInit {

  categorias:Categoria []=[]
  productos:Producto[]=[]
  marcas:Marca[]=[]


  public producto :Producto = new Producto();
  public categoria :Categoria = new Categoria();
  public marca :Marca = new Marca()

  constructor(private productoService:ProductoService, private router: Router , private categoriaService :CategoriaService, private marcaService:MarcaService){

  }

  ngOnInit(): void {
    this.Editar();

    this.categoriaService.getCategorias().subscribe(
      categoriasMetodo=>{
      this.categorias=categoriasMetodo;
      }
    ); 

    this.marcaService.getMarcas().subscribe(
      marcasMetodo=>{
      this.marcas=marcasMetodo;
      }
    );
  }

  Editar(){
    let idproducto=localStorage.getItem("idproducto"); 
    this.productoService.getProductoId(+idproducto!)
    .subscribe(data=>{
      this.producto=data;
    })
  }


  actualizarProducto(producto:Producto){
    this.productoService.actualizarProducto(producto)
    .subscribe(data=>{
      this.producto = data    
    })
    Swal.fire("Informacion", "Se actualizó con éxito","success") 
    this.router.navigate(["productos"])
  }


}
