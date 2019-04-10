import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegestirFormComponent } from './components/regestir-form/regestir-form.component';
import { CartCounterComponent } from './components/cart-counter/cart-counter.component';
import { WishListCounterComponent } from './components/wish-list-counter/wish-list-counter.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CartComponent } from './components/cart/cart.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import {ProductdetailsComponent} from './components/productdetails/productdetails.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  //{ path: 'footer', component: FooterComponent },
  //{ path: 'header', component: HeaderComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'register', component: RegestirFormComponent },
  { path: 'cart', component: CartComponent },
  { path: 'cart/;id', component: CartComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'productdetails/:id', component: ProductdetailsComponent },
  { path: '**', component: NotFoundComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
