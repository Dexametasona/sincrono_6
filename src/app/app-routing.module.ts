import { InicioComponent } from './modulos/usuarios/inicio/inicio.component';
import { ContactoComponent } from './modulos/usuarios/contacto/contacto.component';
import { ServiciosComponent } from './modulos/usuarios/servicios/servicios.component';
import { NosotrosComponent } from './modulos/usuarios/nosotros/nosotros.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'Inicio', component: InicioComponent},
  {path:'**', pathMatch:'full', redirectTo:'Inicio'},
  {path:'Nosotros', component: NosotrosComponent},
  {path:'Servicios', component: ServiciosComponent},
  {path:'Contactos', component: ContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
