import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipoSuscripcionComponent } from './tipo-suscripcion/tipo-suscripcion.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { TipoComponent } from './tipo-suscripcion/tipo/tipo.component';
import { EditorialComponent } from './editorial/editorial.component';

const routes: Routes = [
  {path:'', component: TipoSuscripcionComponent},    //si es vacío me va a redirigir a tipoSuscrip directamente
  {path:'categoría', component: CategoriaComponent},
  {path:'tipo', component: TipoComponent},
  {path:'editorial', component: EditorialComponent},
  {path:'editorial/:categoría', component: EditorialComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
