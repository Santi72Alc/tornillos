import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/interfaces';

@Component({
  selector: 'app-window-info',
  templateUrl: './window-info.component.html',
  styleUrls: ['./window-info.component.css'],
})
export class WindowInfoComponent {
  @Input() userLogged!: User;

  @Input() registros: number;

  @Output() onRevisar: EventEmitter<void>;

  constructor() {
    this.registros = 0;

    this.onRevisar = new EventEmitter();
  }

  onClick() {
    this.onRevisar.emit()
  }
}
