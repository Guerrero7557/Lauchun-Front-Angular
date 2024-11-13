import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/Models/Categoria';
import { CategoriaService } from 'src/app/Service/categoria/listar-cat/categoria.service';


@Component({
  selector: 'app-add-cat',
  templateUrl: './add-cat.component.html',
  styleUrls: ['./add-cat.component.css']
})
export class AddCatComponent implements OnInit {

  categorias:Categoria []=[]

  public categoria:Categoria = new Categoria()

  constructor(private router:Router, private categoriaService:CategoriaService) { }

  ngOnInit(): void {
    this.categoriaService.getCategorias().subscribe(
      categoriasMetodo=>{
      this.categorias=categoriasMetodo;
      }
    ); 
  }

  
  
  GuardarCategoria(categoria:Categoria){
    this.categoriaService.createCategoria(categoria)
    .subscribe(data=>{
      alert("Se Agrego Con exito");
      this.router.navigate(["categoria"])
    })
  }

  AgregarCategoria(categoria:Categoria){
    this.categoriaService.createCategoria(categoria)
    .subscribe(data=>{      
      alert("Se registró con éxito");
      this.router.navigate(["categoria"])
    })
  }

}
