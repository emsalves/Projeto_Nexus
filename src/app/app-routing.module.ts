import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TitulosComponent } from './titulos/titulos.component';
import { Titulo2Component } from './titulo2/titulo2.component';
import { Titulo3Component } from './titulo3/titulo3.component';
 
const routes: Routes = [{

 path: "",
 component:  HomeComponent                        
},
{

  path: "titulos",
  component: TitulosComponent

},
{

  path: "titulo2",
  component: Titulo2Component,

},
{

  path: "titulo3",
  component: Titulo3Component,

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
