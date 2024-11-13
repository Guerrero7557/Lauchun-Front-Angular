import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NavbarComponent } from './navbar/navbar.component';


//============Utilidades==============
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//============Producto==============
import { ProductosComponent } from './productos/productos.component';
import { UpdateprodComponent } from './productos/updateprod/updateprod/updateprod.component';
import { AgregarprodComponent } from './productos/agregarprod/agregarprod.component';


//============Categoria==============
import{AddCatComponent} from './categoria/add-cat/add-cat.component';
import { EditcatComponent } from './categoria/editcat/editcat.component'
import { CategoriaComponent } from './categoria/listar-cat/categoria.component';

//============Proveedor==============
import { ProveedorComponent } from './proveedor/listarproveedor/proveedor.component';
import { AddproveedorComponent } from './proveedor/addproveedor/addproveedor.component';
import { UpdateproveedorComponent } from './proveedor/updateproveedor/updateproveedor.component';

//============Rol==============
import { RolComponent } from './rol/listarrol/rol.component';
import { AddrolComponent } from './rol/addrol/addrol.component';
import { UpdaterolComponent } from './rol/updaterol/updaterol.component';

//============Ventas==============
import { AddVentasComponent } from './ventas/add-ventas/add-ventas.component';
import { EditVentasComponent } from './ventas/edit-ventas/edit-ventas.component';
import { VentasComponent } from './ventas/listar-venta/ventas.component';

import { NosotrosComponent } from './nosotros/nosotros.component';

import { LoginComponent } from './login/login.component';
import { ListarUComponent } from './Usuario/listar-u/listar-u.component';


//============Marca==============
import { MarcaComponent } from './marca/listarmarca/marca.component';
import { AddmarcaComponent } from './marca/addmarca/addmarca.component';
import { UpdatemarcaComponent } from './marca/updatemarca/updatemarca.component';

import { ListartipopagoComponent } from './tipopago/listartipopago/listartipopago.component';
import { AddtipopagoComponent } from './tipopago/addtipopago/addtipopago.component';
import { UpdatetipopagoComponent } from './tipopago/updatetipopago/updatetipopago.component';
import { UpdateuserComponent } from './Usuario/updateuser/updateuser.component';

//============Compra==============
import { ListcompraComponent } from './compra/listcompra/listcompra.component';
import { AddcompraComponent } from './compra/addcompra/addcompra.component';
import { UpdatecompraComponent } from './compra/updatecompra/updatecompra.component';

//=======================VENTAS============================


//=======================USUARIO============================
import { AddUserComponent } from './Usuario/add-user/add-user.component';



import { AdddetalleComponent } from './compra/adddetalle/adddetalle.component';
import { ExportpdfComponent } from './compra/exportpdf/exportpdf.component';
import { CatalogoComponent } from './Apartado_Cliente/catalogo/catalogo.component';
import { DetalleproductoComponent } from './Apartado_Cliente/detalleproducto/detalleproducto.component';
import { CarritoclienteComponent } from './Apartado_Cliente/carritocliente/carritocliente.component';
import { AuthInterceptor } from './helpers/auth.interceptor';
import { BoletaComponent } from './Apartado_Cliente/boleta/boleta.component';

import { DashboardventasComponent } from './Estadistica/dashboardventas/dashboardventas.component';
import { DashboardcomprasComponent } from './Estadistica/dashboardcompras/dashboardcompras.component';
import { DashboardalmacenComponent } from './Estadistica/dashboardalmacen/dashboardalmacen.component';

import { NgxChartsModule } from '@swimlane/ngx-charts';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductosComponent,
    AddVentasComponent,
    NosotrosComponent,
    LoginComponent,
    ListarUComponent,
    CategoriaComponent,
    EditcatComponent,
    AddCatComponent,
    AddVentasComponent,
    UpdateprodComponent,
    ProveedorComponent,
    AddproveedorComponent,
    UpdateproveedorComponent,
    RolComponent,
    AddrolComponent,
    UpdaterolComponent,
    MarcaComponent,
    AddmarcaComponent,
    UpdatemarcaComponent,
    ListartipopagoComponent,
    AddtipopagoComponent,
    UpdatetipopagoComponent,
    UpdateuserComponent,
    ListcompraComponent,
    AddcompraComponent,
    UpdatecompraComponent,
    AgregarprodComponent,
    AddUserComponent,
    AdddetalleComponent,
    ExportpdfComponent,
    EditVentasComponent,
    VentasComponent,
    CatalogoComponent,
    DetalleproductoComponent,
    CarritoclienteComponent,   
    BoletaComponent,
    DashboardventasComponent,
    DashboardcomprasComponent,
    DashboardalmacenComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, //Este modulo nos permite tener control de los formularios en angular
    NgxChartsModule
  ],
  providers: [
    {
      provide :HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
