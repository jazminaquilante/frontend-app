import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editorial',
  templateUrl: './editorial.component.html',
  styleUrls: ['./editorial.component.css']
})
export class EditorialComponent implements OnInit {
  categoriaSeleccionada: string = ''; 
  editoriales: string[] = ['Diario Clarín', 'La Nación', 'Infobae','Página 12', 'Perfil', 'La Capital', 'TN', 'BBC','Euro News'];

  editorialUrls: { [editorial: string]: { [categoria: string]: string } } = {
    'Diario Clarín': {
      Deportes: 'https://www.clarin.com/deportes',
      Política: 'https://www.clarin.com/politica',
      Economía: 'https://www.clarin.com/economia',
      Ciencia: 'https://www.clarin.com/Sociedad/',
      Espectáculo: 'https://www.clarin.com/espectaculos',
      Sociedad: 'https://www.clarin.com/Sociedad',
    },
    'La Nación': {
      Deportes: 'https://www.lanacion.com.ar/deportes/',
      Política: 'https://www.lanacion.com.ar/politica/',
      Economía: 'https://www.lanacion.com.ar/economia/',
      Cultura: 'https://www.lanacion.com.ar/cultura/',
      Espectáculo: 'https://www.lanacion.com.ar/espectaculos/',
      Sociedad: 'https://www.lanacion.com.ar/Sociedad/'
    },
    'Infobae': {
      Deportes: 'https://www.infobae.com/deportes/',
      Política: 'https://www.infobae.com/politica/',
      Ciencia: 'https://www.infobae.com/ciencia/',
      Economía: 'https://www.infobae.com/economia/',
    },
    'La Capital': {
      Política: 'https://www.lacapital.com.ar/secciones/politica.html',
      Ciencia: 'https://www.lacapital.com.ar/secciones/tecnologia.html',
      Economía: 'https://www.lacapital.com.ar/secciones/economia.html',
      Policiales: 'https://www.lacapital.com.ar/secciones/policiales.html',
      Espectáculo: 'https://www.lacapital.com.ar/secciones/zoom.html',
      Sociedad: 'https://www.lacapital.com.ar/secciones/laciudad.html'
    },
    'Página 12': {
      Economía: 'https://www.pagina12.com.ar/secciones/economia',
      Política: 'https://www.pagina12.com.ar/secciones/el-pais',
      Ciencia: 'https://www.pagina12.com.ar/secciones/ciencia',
      Espectáculo: 'https://www.pagina12.com.ar/suplementos/cultura-y-espectaculos',
      Sociedad: 'https://www.pagina12.com.ar/secciones/Sociedad',
      Deportes: 'https://www.pagina12.com.ar/deportes',
      Cultura: 'https://www.pagina12.com.ar/suplementos/cultura-y-espectaculos',
    },
    'Perfil': {
      Economía: 'https://www.perfil.com/seccion/economia/',
      Política: 'https://www.perfil.com/seccion/politica',
      Ciencia: 'https://www.perfil.com/seccion/ciencia/',
      Espectáculo: 'https://www.perfil.com/seccion/arte/',
      Sociedad: 'https://www.perfil.com/seccion/Sociedad',
      Deportes: 'https://442.perfil.com/?_gl=1*1b109ja*_ga*MTA5MTY1NjA3MS4xNzMyNzEzMDQz*_ga_ZVLDWW22SP*MTczMjc1ODQyNy4zLjEuMTczMjc1ODUzNS4wLjAuMA..&_ga=2.186438057.1030416188.1732713043-1091656071.1732713043',
      Cultura: 'https://www.perfil.com/seccion/cultura/',
      Pronóstico: 'https://www.perfil.com/seccion/clima'
    },
    'TN': {
      Economía: 'https://tn.com.ar/economia/',
      Política: 'https://tn.com.ar/politica/',
      Ciencia: 'https://tn.com.ar/tecno/',
      Policiales: 'https://tn.com.ar/policiales/',
      Espectáculo: 'https://tn.com.ar/show/',
      Sociedad: 'https://tn.com.ar/Sociedad/',
      Deportes: 'https://tn.com.ar/deportes/',
      Cultura: 'https://tn.com.ar/musica/',
      Pronóstico: 'https://tn.com.ar/clima/'
    },
    'BBC': {
      Economía: 'https://www.bbc.com/mundo/topics/c06gq9v4xp3t',
      Política: 'https://www.bbc.com/mundo/topics/c2lej05epw5t',
      Ciencia: 'https://www.bbc.com/mundo/topics/ckdxnw959n7t',
      Espectáculo: 'https://www.bbc.com/mundo/topics/cr50y7p7qyqt',
      Sociedad: 'https://www.bbc.com/mundo/topics/c2dwq9zyv4yt',
      Deportes: 'https://www.bbc.com/sport',
      Cultura: 'https://www.bbc.com/culture',
    },
    'Euro News':{
      Deportes:'https://es.euronews.com/noticias/deportes',
      Economía: 'https://es.euronews.com/business/economia',
      Ciencia: 'https://es.euronews.com/salud/noticias-de-salud',
      Espectáculo: 'https://es.euronews.com/programas/musica',
      Sociedad: 'https://es.euronews.com/noticias/internacional',
      Cultura: 'https://es.euronews.com/cultura',
      Pronóstico: 'https://es.euronews.com/special/climate'
    }
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Obtener la categoría seleccionada desde los parámetros de la URL
    this.categoriaSeleccionada = this.route.snapshot.paramMap.get('categoría') || '';
  }

  irANoticia(editorial: string) {
    const url = this.editorialUrls[editorial]?.[this.categoriaSeleccionada];
    if (url) {
      window.open(url, '_blank');
    } else {
      alert('No hay noticias disponibles para esta categoría en esta editorial.');
    }
  }
  getLogo(editorial: string): string {
  const logos: { [key: string]: string } = {
    'Diario Clarín': 'clarin.png',
    'La Nación': 'la-nacion.png',
    'Página 12': 'pagina-12.jpg',
    'Infobae': 'infobae.png',
    'Perfil': 'perfil.png',
    'La Capital': 'la-capital.png',
    'TN': 'tn.png',
    'BBC':'BBC.png',
    'Euro News': 'euronews.jpg'

  };

  return logos[editorial] || 'default-logo.png'; // Devuelve un logo por defecto si no hay coincidencia
}

}
