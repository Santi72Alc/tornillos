import { Component, OnInit } from '@angular/core';
import { Tornillo } from 'src/app/models/interfaces';
import { TornillosService } from 'src/app/services/tornillos.service';

@Component({
  selector: 'app-listado-page',
  templateUrl: './listado-page.component.html',
  styleUrls: ['./listado-page.component.css'],
})
export class ListadoPageComponent implements OnInit {
  tornillos: Array<Tornillo>;

  constructor(private tornillosSrv: TornillosService) {
    this.tornillos = new Array<Tornillo>();
  }

  ngOnInit(): void {
    this.tornillos = this.tornillosSrv.getAllTornillos();
  }

  onDeleteItem(item: Tornillo): void {
    this.tornillos = this.tornillos.filter(
      (tornillo) => tornillo.id !== item.id
    );
    console.log('Borrado Tornillo ID: ', item.id);
  }

  onSaveItem(item2?: Tornillo): void {
    const item: Tornillo = {
      id: 99,
      nombre: 'Margaritha',
      formato: 'red',
      marca: 'Voluptate ea minim tempor irure irure aliquip amet.',
      precio: 9.46,
    };

    this.tornillos.push(item);
    console.log('Grabamos el registro ', item);
    console.log('Recibido: ', item2);
  }
}
