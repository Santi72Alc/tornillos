import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';
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
  itemsPerPage: number;

  constructor() {
    this.itemsPerPage = 5;
    this.configPaginate = {
      itemsPerPage: this.itemsPerPage,
      currentPage: 1,
      totalItems: 0,
    };
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
    this.configPaginate.currentPage = 1;
  }

  onSelectItem(item: Tornillo) {
    console.log('pulsado: ', item);
    this.onDeleteItem.emit(item);
  }
}
