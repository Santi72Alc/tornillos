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

  numTornillos: number;
  isLoading: boolean;
  private userTest: User = { isLogged: true, name: 'omctis' };
  private noUser: User = { isLogged: false, name: 'Iniciar sesión' };

  constructor(private tornillosSrv: TornillosService) {
    this.title = 'Tornillos';
    this.userLogged = this.noUser;
    this.isLoading = false;
    this.isHomePage = true;
    this.numTornillos = 0;
  }

  ngOnInit(): void {
    this.numTornillos = this.tornillosSrv.getAllTornillos().length;
    this.userLogged = this.userTest;
  }

  onChangeState(isLogged: boolean) {
    this.userLogged = isLogged ? this.userTest : this.noUser;
    if (!isLogged) this.isHomePage = true;
  }

  onRevisar() {
    // Hacemos tiempo 600ms mostrando un spinner como si estuvieramos
    // leyendo de BDD
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.isHomePage = false;
    }, 600);
  }

}
