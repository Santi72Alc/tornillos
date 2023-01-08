import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-footer-listado',
  templateUrl: './footer-listado.component.html',
  styleUrls: ['./footer-listado.component.css'],
})
export class FooterListadoComponent {
  @Output() onNuevoItem: EventEmitter<void>;
  constructor() {
    this.onNuevoItem = new EventEmitter();
  }

  nuevoItem() {
    this.onNuevoItem.emit();
  }
}
