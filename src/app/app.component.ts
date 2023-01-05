import { Component } from '@angular/core';
import { data } from './mock/tornillos.data';
import { Tornillo, User } from './types/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string;

  userLogged: User;
  isHomePage: boolean;

  tornillos: Array<Tornillo>;
  private userTest: User = { isLogged: true, name: 'dqmcteis' };
  private noUser: User = { isLogged: false, name: 'Inicie sesión' };

  constructor() {
    this.title = 'Tornillos';
    this.userLogged = this.noUser;
    this.tornillos = data;
    this.isHomePage = true;
  }

  onChangeState(newState: boolean) {
    this.userLogged = newState ? this.userTest : this.noUser;
  }
}
