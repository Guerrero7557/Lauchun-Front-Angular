import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../../../Models/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private urlEndPoint:string="http://localhost:8095/ApiLauchunMovil/";

  constructor(private http:HttpClient) { }

  getCategorias():Observable<Categoria[]>{    
    return this.http.get<Categoria[]>(this.urlEndPoint + "categoria");
  }

  createCategoria(categoria:Categoria){
    return this.http.post<Categoria>(this.urlEndPoint + "categoria",categoria)
  }

  getCategoriasId(idCategoria:number){
    return this.http.get<Categoria>(this.urlEndPoint+"categoria/"+idCategoria);
  }
  updateCategorias(categoria:Categoria){
    return this.http.put<Categoria>(this.urlEndPoint+"categoria/"+categoria.idcategoria,categoria);
  }

  deleteCategoria(categoria:Categoria):Observable<any>{
    return this.http.delete<Categoria>(this.urlEndPoint+"categoria/"+categoria.idcategoria);
  }
}
