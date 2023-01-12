import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/models/interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() userLogged!: User;

  @Output() onLogin: EventEmitter<void>;
  @Output() onLogout: EventEmitter<void>;

  constructor() {
    this.onLogin = new EventEmitter();
    this.onLogout = new EventEmitter();
  }

  onClick(isLogged: boolean) {
    isLogged ? this.onLogin.emit() : this.onLogout.emit();
  }
}
