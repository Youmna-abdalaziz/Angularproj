import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductService } from 'src/app/product.service';
import { WishlistService } from 'src/app/wishlist.service';
import { UserService } from 'src/app/user.service';
import { CartService } from 'src/app/cart.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartCounterComponent } from './components/cart-counter/cart-counter.component';
import { WishListCounterComponent } from './components/wish-list-counter/wish-list-counter.component';
import { NavigationLinksComponent } from './components/navigation-links/navigation-links.component';
import { UserNameComponent } from './components/user-name/user-name.component';
import { LogoutComponent } from './components/logout/logout.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegestirFormComponent } from './components/regestir-form/regestir-form.component';
import { InputComponent } from './components/shared/input/input.component';
import { SubmitComponent } from './components/shared/submit/submit.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CartComponent } from './components/cart/cart.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CartCounterComponent,
    WishListCounterComponent,
    NavigationLinksComponent,
    UserNameComponent,
    LogoutComponent,
    SingleProductComponent,
    LoginFormComponent,
    RegestirFormComponent,
    InputComponent,
    SubmitComponent,
    NotFoundComponent,
    CartComponent,
    WishlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    ProductService,
    UserService,
    WishlistService,
    CartService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
