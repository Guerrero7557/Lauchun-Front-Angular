import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carrito } from 'src/app/Models/Carrito';


@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private urlEndPoint:string="http://localhost:8095/ApiLauchunMovil/";

  constructor(private http:HttpClient) { }

  getCarrito():Observable<Carrito[]>{    
    return this.http.get<Carrito[]>(this.urlEndPoint + "carrito");
  }

  getCarritoxcliente(id:number):Observable<Carrito[]>{    
    return this.http.get<Carrito[]>(this.urlEndPoint + "carrito/buscarporusuario/"+ id);
  }

  createItemCarrito(carrito:Carrito){
    return this.http.post<Carrito>(this.urlEndPoint + "carrito",carrito)
  }

  getCarritoId(idcarrito:number){
    return this.http.get<Carrito>(this.urlEndPoint+"carrito/"+idcarrito);
  }
  updateCarrito(carrito:Carrito){
    return this.http.put<Carrito>(this.urlEndPoint+"carrito/"+carrito.idcarrito,carrito);
  }

  deleteRegistroCarrito(item:number){
    return this.http.delete<Carrito>(this.urlEndPoint+"carrito/"+item);
  }

  deleteCarrito(idusuario:number):Observable<any>{
    return this.http.delete<Carrito>(this.urlEndPoint+"carrito/borrarxusuario/"+idusuario);
  }

 
}
