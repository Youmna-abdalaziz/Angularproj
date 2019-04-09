import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/product-model';
import { ProductService } from 'src/app/product.service';
import { Item } from 'src/app/item-model';
import { WishlistService } from 'src/app/wishlist.service';

@Component({
  selector: 'app-wish-list-counter',
  templateUrl: './wish-list-counter.component.html',
  styleUrls: ['./wish-list-counter.component.scss']
})
export class WishListCounterComponent implements OnInit {
  private items: ProductModel[] = [];
  private totalcount: number = 0;

  constructor(private wishlistContents: WishlistService) {
    this.wishlistContents.getItems().subscribe(res =>
      this.items = res);
    this.wishlistContents.getCount().subscribe(res =>
      this.totalcount = res);
  }
  loadWishList(): void {
    this.items = [];
    this.totalcount = 0;
    let wishlist = JSON.parse(localStorage.getItem('wishlist'));
    for (var i = 0; i < wishlist.length; i++) {
      let item = JSON.parse(wishlist[i]);
      this.items.push(item);
    }
    this.totalcount = wishlist.length;
  }
  remove(id: string): void {
    let wishlist: any = JSON.parse(localStorage.getItem('wishlist'));
    for (var i = 0; i < wishlist.length; i++) {
      let item: ProductModel = JSON.parse(wishlist[i]);
      if (item.product_id == id) {
        wishlist.splice(i, 1);
        break;
      }
    }
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    this.loadWishList();
  }


  ngOnInit() {
    this.loadWishList();
  }

}
