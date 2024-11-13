import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import{ProductosComponent} from'./productos/productos.component';
import { VentasComponent } from './ventas/listar-venta/ventas.component';
import{NosotrosComponent} from'./nosotros/nosotros.component';
import{LoginComponent} from'./login/login.component';
import { CategoriaComponent } from './categoria/listar-cat/categoria.component';
import { AddCatComponent } from './categoria/add-cat/add-cat.component';
import { EditcatComponent} from './categoria/editcat/editcat.component';
import { AgregarprodComponent } from './productos/agregarprod/agregarprod.component';
import { AddproveedorComponent } from './proveedor/addproveedor/addproveedor.component';
import { UpdateproveedorComponent } from './proveedor/updateproveedor/updateproveedor.component';
import { RolComponent } from './rol/listarrol/rol.component';
import { AddrolComponent } from './rol/addrol/addrol.component';
import { UpdaterolComponent } from './rol/updaterol/updaterol.component';
import { ProveedorComponent } from './proveedor/listarproveedor/proveedor.component';
import {MarcaComponent} from './marca/listarmarca/marca.component';
import { UpdatemarcaComponent } from './marca/updatemarca/updatemarca.component';
import { AddmarcaComponent } from './marca/addmarca/addmarca.component';
import { ListartipopagoComponent } from './tipopago/listartipopago/listartipopago.component';
import { AddtipopagoComponent } from './tipopago/addtipopago/addtipopago.component';
import { UpdatetipopagoComponent } from './tipopago/updatetipopago/updatetipopago.component';
import { AddcompraComponent } from './compra/addcompra/addcompra.component';

import { UpdateprodComponent } from './productos/updateprod/updateprod/updateprod.component';
import { ListcompraComponent } from './compra/listcompra/listcompra.component';

import { ListarUComponent } from './Usuario/listar-u/listar-u.component';
import { UpdateuserComponent } from './Usuario/updateuser/updateuser.component';
import { AddUserComponent } from './Usuario/add-user/add-user.component';
import { UpdatecompraComponent } from './compra/updatecompra/updatecompra.component';
import { AdddetalleComponent } from './compra/adddetalle/adddetalle.component';
import { ExportpdfComponent } from './compra/exportpdf/exportpdf.component';
import { CatalogoComponent } from './Apartado_Cliente/catalogo/catalogo.component';
import { DetalleproductoComponent } from './Apartado_Cliente/detalleproducto/detalleproducto.component';
import { CarritoclienteComponent } from './Apartado_Cliente/carritocliente/carritocliente.component';
import { AuthGuard } from './helpers/auth.guard';
import { AuthrolGuard } from './helpers/authrol.guard';
import { AuthrolEAGuard } from './helpers/authrol-ea.guard';
import { AuthrolEcGuard } from './helpers/authrol-ec.guard';


import { BoletaComponent } from './Apartado_Cliente/boleta/boleta.component';
import { AddVentasComponent } from './ventas/add-ventas/add-ventas.component';
import { DashboardcomprasComponent } from './Estadistica/dashboardcompras/dashboardcompras.component';
import { DashboardalmacenComponent } from './Estadistica/dashboardalmacen/dashboardalmacen.component';
import { DashboardventasComponent } from './Estadistica/dashboardventas/dashboardventas.component';




const routes: Routes = [
  {path:'productos',component: ProductosComponent, canActivate:[AuthGuard]},
  {path:'updateproductos',component: UpdateprodComponent,canActivate:[AuthGuard]},
  {path:'ventas',component: VentasComponent, canActivate:[AuthGuard, AuthrolGuard]},
  {path:'nosotros',component: NosotrosComponent},
  {path:'login',component: LoginComponent},
  {path:'categoria',component: CategoriaComponent, canActivate:[AuthGuard]},
  {path:'add-cat',component: AddCatComponent, canActivate:[AuthGuard]},
  {path:'editcat',component:EditcatComponent, canActivate:[AuthGuard]},
  {path:'addprod',component:AgregarprodComponent, canActivate:[AuthGuard]},
  {path:'addproveedor',component:AddproveedorComponent, canActivate:[AuthGuard]},
  {path:'editproveedor',component:UpdateproveedorComponent, canActivate:[AuthGuard]},
  {path:'rol',component:RolComponent, canActivate:[AuthGuard]},
  {path:'addrol',component:AddrolComponent, canActivate:[AuthGuard]},
  {path:'updaterol',component:UpdaterolComponent, canActivate:[AuthGuard]},
  {path:'proveedor',component: ProveedorComponent, canActivate:[AuthGuard]},
  {path:'marca',component: MarcaComponent, canActivate:[AuthGuard]},
  {path:'updatemarca',component: UpdatemarcaComponent, canActivate:[AuthGuard]},
  {path:'addmarca',component: AddmarcaComponent, canActivate:[AuthGuard]},
  {path:'tipopago',component: ListartipopagoComponent, canActivate:[AuthGuard]},
  {path:'edittipopago',component: UpdatetipopagoComponent, canActivate:[AuthGuard]},
  {path:'addtipopago',component: AddtipopagoComponent, canActivate:[AuthGuard]},
  {path:'editcompra',component: UpdatecompraComponent, canActivate:[AuthGuard]},
  {path:'addcompra',component: AddcompraComponent, canActivate:[AuthGuard]},
  {path:'updatecompra',component: UpdatecompraComponent, canActivate:[AuthGuard]}, 
  
  
  {path:'listcompra',component: ListcompraComponent, canActivate:[AuthGuard]},
  {path:'listuser',component: ListarUComponent, canActivate:[AuthGuard, AuthrolGuard]},
  {path:'edituser',component: UpdateuserComponent, canActivate:[AuthGuard, AuthrolGuard]},
  {path:'adddetallecompra',component: AdddetalleComponent, canActivate:[AuthGuard]},
  {path:'exportpdf',component: ExportpdfComponent, canActivate:[AuthGuard]},
  {path:'adduser',component: AddUserComponent, canActivate:[AuthGuard, AuthrolGuard]},
  //apartado del cliente
  {path:'catalogo',component: CatalogoComponent},
  {path:'boleta',component: BoletaComponent,canActivate:[AuthGuard]},
  {path:'caruser',component: CarritoclienteComponent, canActivate:[AuthGuard]},
  {path:'detprod',component: DetalleproductoComponent, canActivate:[AuthGuard]},  
  {path:'addventa',component:AddVentasComponent, canActivate:[AuthGuard]},
  {path:'dashboardcompra',component:DashboardcomprasComponent, canActivate:[AuthGuard]},
  {path:'dashboardventa',component:DashboardventasComponent, canActivate:[AuthGuard]},
  {path:'dashboardalmacen',component:DashboardalmacenComponent, canActivate:[AuthGuard]},
  
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
