import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/product-model';
import { ProductService } from 'src/app/product.service';
import { Item } from 'src/app/item-model';
import { CartService } from 'src/app/cart.service';


@Component({
  selector: 'app-cart-counter',
  templateUrl: './cart-counter.component.html',
  styleUrls: ['./cart-counter.component.scss']
})
export class CartCounterComponent implements OnInit {
  private items: Item[] = [];
  private totalcount: number = 0;

  constructor(private cartContents: CartService) {
    this.cartContents.getItems().subscribe(res =>
      this.items = res);
    this.cartContents.getCount().subscribe(res =>
      this.totalcount = res);
  }

  loadCart(): void {
    this.items = [];
    this.totalcount = 0;
    let cart = JSON.parse(localStorage.getItem('cart'));
    for (var i = 0; i < cart.length; i++) {
      let item = JSON.parse(cart[i]);
      this.items.push({
        product: item.product,
        quantity: item.quantity
      });
      this.totalcount += item.quantity;
    }
  }

  remove(id: string): void {
    let cart: any = JSON.parse(localStorage.getItem('cart'));
    let index: number = -1;
    for (var i = 0; i < cart.length; i++) {
      var item: Item = JSON.parse(cart[i]);
      if (item.product.product_id == id) {
        if (item.quantity > 1) {
          index = i;
          let item: Item = JSON.parse(cart[index]);
          item.quantity -= 1;
          cart[index] = JSON.stringify(item);
          localStorage.setItem("cart", JSON.stringify(cart));
        } else {
          cart.splice(i, 1);
          break;
        }
      }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    this.loadCart();
  }


  ngOnInit() {
    this.loadCart();
  }

}
