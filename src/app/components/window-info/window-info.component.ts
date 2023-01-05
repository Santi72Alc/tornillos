import { Component, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/types/types';

@Component({
  selector: 'app-window-info',
  templateUrl: './window-info.component.html',
  styleUrls: ['./window-info.component.css'],
})
export class WindowInfoComponent {
  @Input() userLogged!: User;

  constructor() {}
}
