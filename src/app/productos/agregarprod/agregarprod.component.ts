import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/Service/producto/producto.service';
import { Producto } from 'src/app/Models/Producto';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/Service/categoria/listar-cat/categoria.service';
import { Categoria } from 'src/app/Models/Categoria';
import { Marca } from 'src/app/Models/Marca';
import { MarcaService } from 'src/app/Service/marca/marca.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-agregarprod',
  templateUrl: './agregarprod.component.html',
  styleUrls: ['./agregarprod.component.css']
})
export class AgregarprodComponent implements OnInit {  
  categorias:Categoria []=[]
  marcas:Marca[]=[]

  public producto :Producto = new Producto();
  public categoria:Categoria = new Categoria()
  public marca :Marca = new Marca()

  constructor(private productoService:ProductoService, private router: Router, private categoriaService :CategoriaService, private marcaService:MarcaService){

  }

  ngOnInit(){
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


  

  AgregarProducto(producto:Producto){
    this.productoService.createProducto(producto)
    .subscribe(data=>{      
      Swal.fire("Informacion", "Se registró con éxito","success")
      this.router.navigate(["productos"])
    })
    console.log(producto)
  }
}
