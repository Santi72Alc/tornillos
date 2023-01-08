import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Tornillo } from 'src/app/models/interfaces';
import { TornillosService } from 'src/app/services/tornillos.service';
import { FormularioComponent } from './formulario/formulario.component';

@Component({
  selector: 'app-listado-page',
  templateUrl: './listado-page.component.html',
  styleUrls: ['./listado-page.component.css'],
})
export class ListadoPageComponent implements OnInit {
  tornillos: Array<Tornillo>;
  formAbierto: boolean;

  constructor(
    private tornillosSrv: TornillosService,
    private formularioAlta: MatDialog
  ) {
    this.tornillos = new Array<Tornillo>();
    this.formAbierto = false;
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

  openFormulario() {
    if (!this.formAbierto) {
      this.formAbierto = true;
      this.formularioAlta
        .open(FormularioComponent)
        .beforeClosed()
        .subscribe((result: { ok: boolean; tornillo?: Tornillo }) => {
          console.log(result);
          if (result?.ok) {
            this.grabarItem(result.tornillo);
          }
          this.formAbierto = false;
        });
    }
  }

  grabarItem(item?: Tornillo): void {
    if (item?.id) {
      this.tornillos.push(item);
    }
  }
}
