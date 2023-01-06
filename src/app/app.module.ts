import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { WindowInfoComponent } from './components/window-info/window-info.component';
import { ListadoPageComponent } from './components/listado-page/listado-page.component';
import { FooterListadoComponent } from './components/listado-page/footer-listado/footer-listado.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    WindowInfoComponent,
    ListadoPageComponent,
    FooterListadoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
