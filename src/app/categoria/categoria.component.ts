import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent {

categorias = [
  { nombre: 'Política', imagen: 'politicas.jpg' },
  { nombre: 'Deportes', imagen: 'deportes.png' },
  { nombre: 'Ciencia', imagen: 'ciencia.png' },
  { nombre: 'Economía', imagen: 'economia.jpg' },
  { nombre: 'Cultura', imagen: 'cultura.jpg' },
  { nombre: 'Espectáculo', imagen: 'espectaculos.jpg' },
  { nombre: 'Policiales', imagen: 'policial.jpg' },
  { nombre: 'Sociedad', imagen: 'social.jpg' },
  { nombre: 'Pronóstico', imagen: 'clima.jpg' },
];

  constructor(private router: Router) {}

  irAEditorial(categoria: string) {
    this.router.navigate(['/editorial'], {queryParams: {categoria}});
  }

}
