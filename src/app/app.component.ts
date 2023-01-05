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

  user: User;
  isHomePage: boolean;

  tornillos: Array<Tornillo>;
  private userTest: User = { isLogged: true, name: 'userTest' };

  constructor() {
    this.title = 'Tornillos';
    this.user = {
      isLogged: false,
      name: '',
    };
    this.tornillos = data;
    this.isHomePage = true;
  }

  goHomePage = (state: boolean = true) => (this.isHomePage = state);
}
