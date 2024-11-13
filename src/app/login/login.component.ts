import { Component , OnInit} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Credenciales } from '../Models/Credenciales';
import { Usuario } from '../Models/Usuario';
import { LoginService } from '../Service/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent   {

  public credenciales:Credenciales = new Credenciales()

  public usuario:Usuario= new Usuario()

  constructor( private login:LoginService, private router:Router){
    

  }

  ngOnInit(): void {
    
  }

  logeo (credenciales:Credenciales){
    
      this.login.login(credenciales).subscribe(response =>{
      
        localStorage.setItem('email', credenciales.email);
        this.login.getUserEmail(credenciales.email).subscribe(u=>{
          localStorage.setItem("usuario", JSON.stringify(u));
          //JSON.parse(localStorage.getItem("usuario"))
          
          
          console.log(u)
          if(u.idrol.idrol ==1 ){
            this.router.navigateByUrl("/listuser")
            //window.location.reload();
          }else if(u.idrol.idrol ==2){
            this.router.navigate(["productos"])
          }else if(u.idrol.idrol ==3){
            this.router.navigate(["listcompra"])
          }else if(u.idrol.idrol ==4){
            this.router.navigate(["ventas"])
          }else{
            this.router.navigate(["catalogo"])
          }
          
        })

               
        console.log(this.credenciales)
      })

    
     //Swal.fire("Error", "No se encontré el usario","success")
       
    
  }



}
