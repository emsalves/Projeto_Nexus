import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { BarraComponent } from './barra/barra.component'; 
import { MatCardModule } from '@angular/material/card';
import { SidebarComponent } from './sidebar/sidebar.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { TitulosComponent } from './titulos/titulos.component';
import { Titulo2Component } from './titulo2/titulo2.component';
import { Titulo3Component } from './titulo3/titulo3.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BarraComponent,
    SidebarComponent,
    HomeComponent,
    FooterComponent,
    TitulosComponent,
    Titulo2Component,
    Titulo3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    LayoutModule,
    MatButtonModule,
    MatIconModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
