import { Component } from '@angular/core';
import { CategoriaService } from 'src/app/Service/categoria/listar-cat/categoria.service';
import { OnInit} from '@angular/core'
import { Categoria } from '../../Models/Categoria';
import { Router } from '@angular/router';



@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit{

  

  categorias:Categoria[]=[]

  constructor(private categoriaService:CategoriaService, private router:Router){
    
  }

  ngOnInit(){
    this.categoriaService.getCategorias().subscribe(
      categoriasMetodo=>{
      this.categorias=categoriasMetodo;
      }
    ); 
  }

  eliminarCategoriacat(categoria:Categoria){
    this.categoriaService.deleteCategoria(categoria)
    .subscribe(data=>{
      this.categoriaService.getCategorias().subscribe(
        categoriasMetodo=>{
        this.categorias=categoriasMetodo;
        }
      ); 
      alert("Categoria Eliminada con Exito")
    })
  }
  Editar(categoria:Categoria):void{
    localStorage.setItem("idcategoria",categoria.idcategoria.toString());
    this.router.navigate(["editcat"]);
  }

  add():void{
    this.router.navigate(["add-cat"]);
  }




}
