import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../Models/Usuario';
import { LoginService } from '../Service/login.service';
import { CatalogoComponent } from '../Apartado_Cliente/catalogo/catalogo.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  public usuario:Usuario
  constructor(public loginservice:LoginService, private router:Router){


  }
  ngOnInit(): void {
    this.usuario = JSON.parse(localStorage.getItem("usuario"))
    console.log(this.usuario)

    this.validartoken()
    
  }

  validartoken(): boolean{
    if(this.loginservice.getToken){   
        
      return true
    }else{
      return false
    }
    
  }

  irlogin(){
    this.router.navigate(['login'])
    
  }
  
  ircarrito(){
    this.router.navigate(['caruser'])
    
  }

  cerrarsesion(){
    this.loginservice.logout()
    window.location.reload();
    //this.router.navigate(['login'])
    
  }


}
