import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';

import { MatDialog } from '@angular/material/dialog';
import { DialogoConfirmacionComponent } from '../dialogo-confirmacion/dialogo-confirmacion.component';

import { Tornillo } from 'src/app/models/interfaces';

@Component({
  selector: 'app-listado-datos',
  templateUrl: './listado-datos.component.html',
  styleUrls: ['./listado-datos.component.css'],
})
export class ListadoDatosComponent implements OnInit {
  @Input() datos!: Array<Tornillo>;
  @Output() onDeleteItem: EventEmitter<Tornillo>;

  configPaginate: PaginationInstance;

  mostarModal: boolean;

  constructor(private dialogo: MatDialog) {
    this.configPaginate = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: 0,
    };
    this.mostarModal = false;
    this.onDeleteItem = new EventEmitter();
  }

  ngOnInit(): void {
    this.configPaginate.totalItems = this.datos.length;
  }

  onChangePage(page: number) {
    this.configPaginate.currentPage = page;
  }

  onChangeItemsPerPage(evt: any) {
    const numItems = evt.target.value;
    this.configPaginate.itemsPerPage = numItems;
  }

  onSelectItem(item: Tornillo) {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: {
          titulo: 'Borrado de registro',
          mensaje: `¿ Confirma el borrado del registro ID: ${item.id} - ${item.nombre} ?`,
        },
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) this.onDeleteItem.emit(item);
      });
  }
}
