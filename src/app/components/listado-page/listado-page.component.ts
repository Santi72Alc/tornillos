import { Component, Input } from '@angular/core';
import { Tornillo } from 'src/app/models/interfaces';

@Component({
  selector: 'app-listado-page',
  templateUrl: './listado-page.component.html',
  styleUrls: ['./listado-page.component.css'],
})
export class ListadoPageComponent {
  @Input() datos!: Array<Tornillo>;

  constructor() {}
}
