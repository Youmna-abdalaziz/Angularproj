import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import {LoginFormComponent} from './components/login-form/login-form.component';
import {RegestirFormComponent} from './components/regestir-form/regestir-form.component'
import {CartCounterComponent} from './components/cart-counter/cart-counter.component'
import {WishListCounterComponent} from './components/wish-list-counter/wish-list-counter.component'
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {path: 'footer',component:FooterComponent },
  {path: 'header' ,component:HeaderComponent},
  {path: 'login' ,component:LoginFormComponent},
  {path: 'regestir' ,component:RegestirFormComponent},
  {path: 'cart' ,component:CartCounterComponent},
  {path: 'wishlist' ,component:WishListCounterComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
