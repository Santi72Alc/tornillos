import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/models/interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() userLogged!: User;

  @Output() onChangeState: EventEmitter<boolean>;

  constructor() {
    this.onChangeState = new EventEmitter();
  }

  onClick(state: boolean) {
    this.onChangeState.emit(state);
  }
}
