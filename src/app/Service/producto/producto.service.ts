import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../../Models/Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private urlEndPoint:string="http://localhost:8095/ApiLauchunMovil/";

  constructor(private http:HttpClient) { }

  getProducto():Observable<Producto[]>{    
    return this.http.get<Producto[]>(this.urlEndPoint + "producto");
  }

  getProductoCustom():Observable<Producto[]>{    
    return this.http.get<Producto[]>(this.urlEndPoint + "producto/custom");
  }

  getProductoxCat(idcat:number):Observable<Producto[]>{    
    return this.http.get<Producto[]>(this.urlEndPoint + "producto/buscarxcateg/"+ idcat);
  }

  getProductoId(id:number){    
    return this.http.get<Producto>(this.urlEndPoint + "producto/"+ id);
  }

  createProducto(producto:Producto){
    return this.http.post<Producto>(this.urlEndPoint + "producto",producto)
  }

  actualizarProducto(producto:Producto){
    return this.http.put<Producto>(this.urlEndPoint + "producto/" + producto.idproducto, producto)
  }

  eliminarProducto(producto:Producto):Observable<any>{
    return this.http.delete<Producto>(this.urlEndPoint+"producto/"+producto.idproducto);
  }

}
