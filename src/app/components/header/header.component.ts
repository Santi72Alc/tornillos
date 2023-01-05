import { Component, Input } from '@angular/core';
import { User } from 'src/app/types/types';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() userLogged!: User;
}
