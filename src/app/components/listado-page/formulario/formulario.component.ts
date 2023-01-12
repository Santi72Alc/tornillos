import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Tornillo } from 'src/app/models/interfaces';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  @Output() onSave: EventEmitter<Tornillo>;

  formulario: FormGroup;

  COLORES: Array<string> = ['Orange', 'White', 'Red', 'Gold', 'Green'].sort();

  constructor(private formModal: MatDialogRef<FormularioComponent>) {
    this.onSave = new EventEmitter();
    this.formulario = this.createFormulario();
  }

  get nombre() {
    return this.formulario.get('nombre');
  }

  get precio() {
    return this.formulario.get('precio');
  }

  get formato() {
    return this.formulario.get('formato');
  }

  get marca() {
    return this.formulario.get('marca');
  }

  createFormulario() {
    return new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      precio: new FormControl(0.0, [Validators.required, Validators.min(0.0)]),
      formato: new FormControl(this.COLORES[0], [Validators.required]),
      marca: new FormControl('', [Validators.required]),
    });
  }

  onResetFormulario() {
    this.formulario.reset();
  }

  cierraFormulario() {
    this.formulario.removeValidators(Validators.required);
    this.formulario.clearValidators()
    this.formulario.updateValueAndValidity();
    this.formModal.close({ ok: false });
  }

  saveItem() {
    if (this.formulario.valid) {
      // Generamos un ID 'pseudo-aleatorio'
      const newTornillo: Tornillo = {
        id: Math.floor(new Date().getTime()),
        nombre: this.formulario.get('nombre')?.value,
        precio: this.formulario.get('precio')?.value,
        formato: this.formulario.get('formato')?.value,
        marca: this.formulario.get('marca')?.value,
      };
      this.formModal.close({ ok: true, tornillo: newTornillo });
    }
  }
}
