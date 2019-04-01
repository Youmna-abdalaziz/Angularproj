import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {path: 'footer',component:FooterComponent },
  {path: 'header' ,component:HeaderComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
