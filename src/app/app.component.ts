import { Component, OnInit } from '@angular/core';
import { Tornillo, User } from './models/interfaces';
import { TornillosService } from './services/tornillos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title: string;

  userLogged: User;
  isHomePage: boolean;

  tornillos: Array<Tornillo>;
  isLoading: boolean;
  private userTest: User = { isLogged: true, name: 'omcteis' };
  private noUser: User = { isLogged: false, name: 'Iniciar sesión' };

  constructor(private tornillosService: TornillosService) {
    this.title = 'Tornillos';
    this.userLogged = this.noUser;
    this.isLoading = false;
    this.isHomePage = true;
    this.tornillos = new Array<Tornillo>;
  }

  ngOnInit(): void {
    this.tornillos = this.tornillosService.getAllTornillos();
  }

  onChangeState(isLogged: boolean) {
    this.userLogged = isLogged ? this.userTest : this.noUser;
    if (!isLogged) this.isHomePage = true;
  }

  onRevisar() {
    console.log('Pulsado para revisar en root!!!');
    // Hacemos tiempo 600ms mostrando un spinner como si estuvieramos
    // leyendo de BDD
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.isHomePage = false;
    }, 600);
  }
}
