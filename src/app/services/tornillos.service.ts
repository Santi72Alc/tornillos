import { Injectable } from '@angular/core';

import { data } from '../mock/tornillos.data';
import { Tornillo } from '../models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class TornillosService {
  constructor() {}

  getAllTornillos(): Array<Tornillo> {
    return data;
  }
}
