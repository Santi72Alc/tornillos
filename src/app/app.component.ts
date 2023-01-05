import { Component } from '@angular/core';
import { timeout } from 'rxjs';
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
  isLoading: boolean;
  private userTest: User = { isLogged: true, name: 'dqmcteis' };
  private noUser: User = { isLogged: false, name: 'Inicie sesión' };

  constructor() {
    this.title = 'Tornillos';
    this.userLogged = this.noUser;
    this.tornillos = data;
    this.isLoading = false;
    this.isHomePage = true;
  }

  onChangeState(isLogged: boolean) {
    this.userLogged = isLogged ? this.userTest : this.noUser;
    if (!isLogged) this.isHomePage = true;
  }

  onRevisar() {
    console.log('Pulsado para revisar en root!!!');
    // Hacemos tiempo 500ms mostrando un spinner como si estuvieramos
    // leyendo de BDD
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.isHomePage = false;
    }, 600);
  }
}
