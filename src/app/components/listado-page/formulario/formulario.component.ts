import { Component, EventEmitter, Output } from '@angular/core';
import { Tornillo } from 'src/app/models/interfaces';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  @Output() onSave: EventEmitter<Tornillo>;
  newTornillo: Tornillo;

  constructor() {
    this.onSave = new EventEmitter();
    this.newTornillo = {
      nombre: '',
      formato: '',
      precio: 0.0,
      marca: '',
    };
  }

  onSaveItem() {
    // Generamos un ID 'pseudo-aleatorio'
    this.newTornillo.id = Math.floor(Math.random() * 100_000);
    this.onSave.emit(this.newTornillo);
  }
}
