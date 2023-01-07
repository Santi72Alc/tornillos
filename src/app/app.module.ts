import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { WindowInfoComponent } from './components/window-info/window-info.component';
import { ListadoPageComponent } from './components/listado-page/listado-page.component';
import { FooterListadoComponent } from './components/listado-page/footer-listado/footer-listado.component';
import { ListadoDatosComponent } from './components/listado-page/listado-datos/listado-datos.component';
import { TornillosService } from './services/tornillos.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    WindowInfoComponent,
    ListadoPageComponent,
    FooterListadoComponent,
    ListadoDatosComponent,
  ],
  imports: [BrowserModule, NgxPaginationModule],
  providers: [TornillosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
