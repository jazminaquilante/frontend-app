import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tipo-suscripcion',
  templateUrl: './tipo-suscripcion.component.html',
  styleUrls: ['./tipo-suscripcion.component.css']
})
export class TipoSuscripcionComponent implements OnInit {

  tipoSuscripcion: string='TIPO SUSCRIPCIÓN';
  formularioUsuario: FormGroup;
  mostrarSuscrip: boolean = false;
  detalleSuscripcion: string | null = null;  
  cargando: boolean = false;

  constructor(private form: FormBuilder, private router: Router) {
  this.formularioUsuario = this.form.group({
    nombre:['', [Validators.required, Validators.minLength(3)]],
    apellido:['',[Validators.required,Validators.minLength(3)]],
    tipoSuscripcion:[''],
    email:['', [Validators.required, Validators.email]],
    password:['',[Validators.required,Validators.minLength(3)]],
  });
  }

  enviar() {
    if (this.formularioUsuario.valid) {
      this.cargando = true; 
      setTimeout(() => {
        this.router.navigate(['/categoría']); 
      }, 1500);
    }
    else{
    }
  }

  hasErrors( controlName: string, errorType: string ) {
    return this.formularioUsuario.get(controlName)?.hasError(errorType) && this.formularioUsuario.get(controlName)?.touched
  }


  ngOnInit(): void {
    this.formularioUsuario.get('tipoSuscripcion')?.valueChanges.subscribe(value => {
      this.mostrarSuscrip = value != ''
      this.tipoSuscripcion = value
    })
  }
}








  
