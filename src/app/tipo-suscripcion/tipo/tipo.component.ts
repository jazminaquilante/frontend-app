import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-tipo',
  templateUrl: './tipo.component.html',
  styleUrls: ['./tipo.component.css']
})
export class TipoComponent implements OnChanges {

  @Input()  tipoSuscripcion: string='Tipo-Suscripcion'
  formularioTipo: FormGroup
  varNueva: string='Tipo'
  precio?: number


  constructor(private form: FormBuilder) {
  this.formularioTipo = this.form.group({
    tipo:[''],
  });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.varNueva = changes?.['tipoSuscripcion'].currentValue;
  }


  hasErrors( controlName: string, errorType: string ) {
    return this.formularioTipo.get(controlName)?.hasError(errorType) && this.formularioTipo.get(controlName)?.touched
  }

  ngOnInit(): void {
    
  }

}