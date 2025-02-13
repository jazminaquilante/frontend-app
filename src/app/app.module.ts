import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TipoSuscripcionComponent } from './tipo-suscripcion/tipo-suscripcion.component';
import { TipoComponent } from './tipo-suscripcion/tipo/tipo.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { EditorialComponent } from './editorial/editorial.component';
@NgModule({
  declarations: [
    AppComponent,
    TipoSuscripcionComponent,
    TipoComponent,
    CategoriaComponent,
    UsuarioComponent,   
    EditorialComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
