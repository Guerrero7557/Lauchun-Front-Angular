import { Component } from '@angular/core';
import{OnInit} from '@angular/core';
import { CategoriaService } from 'src/app/Service/categoria/listar-cat/categoria.service';
import { Categoria } from '../../Models/Categoria';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editcat',
  templateUrl: './editcat.component.html',
  styleUrls: ['./editcat.component.css']
})
export class EditcatComponent implements OnInit{
  public categoria:Categoria = new Categoria()
  constructor(private router:Router, private categoriaService:CategoriaService) { }
  ngOnInit(): void {
    this.Editar();
  }
  
  Editar(){
    let idcategoria=localStorage.getItem("idcategoria"); 
    this.categoriaService.getCategoriasId(+idcategoria!)
    .subscribe(data=>{
      this.categoria=data;
    })
  }
  ActualizarCategoria(categoria:Categoria){
    this.categoriaService.updateCategorias(categoria)
    .subscribe(data=>{
      this.categoria=data;
      alert("Se actualizó con éxito");
      this.router.navigate(["categoria"])
    })
  }

  

}