import { Component, Input } from '@angular/core';
import { Tornillo } from 'src/app/models/interfaces';

@Component({
  selector: 'app-listado-datos',
  templateUrl: './listado-datos.component.html',
  styleUrls: ['./listado-datos.component.css'],
})
export class ListadoDatosComponent {
  @Input() datos!: Array<Tornillo>;
  page: number = 1;
  count: number = 0;
  itemsPerPage: number = 5;

  constructor() {}
}
