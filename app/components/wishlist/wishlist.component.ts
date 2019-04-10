import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/product.service';
import { ProductModel } from 'src/app/product-model';
import { WishlistService } from 'src/app/wishlist.service';
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  private items: ProductModel[] = [];
  private totalcount: number = 0;

  constructor(private activatedRoute: ActivatedRoute,private router:Router,
    private productService: ProductService, private wishS: WishlistService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      var id = params['id'];
      if (id) {
        var item: ProductModel = this.productService.find(id);
        if(!item){
          return this.router.navigate(['notfound']);
        }
        if (localStorage.getItem('wishlist') == null) {
          let wishlist: any = [];
          wishlist.push(JSON.stringify(item));
          localStorage.setItem('wishlist', JSON.stringify(wishlist));
        } else {
          let wishlist: any = JSON.parse(localStorage.getItem('wishlist'));
          let index: number = -1;
          for (var i = 0; i < wishlist.length; i++) {
            let item: ProductModel = JSON.parse(wishlist[i]);
            if (item.product_id == id) {
              index = i;
              break;
            }
          } if (index == -1) {
            wishlist.push(JSON.stringify(item));
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
          } else {
            alert('This item is already added to wish list before');
          }
        }
        this.loadWishList();
      } else {
        this.loadWishList();
      }
    });
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
    this.wishS.setItems(this.items);
    this.wishS.setCount(this.totalcount);
  }
  remove(id: string): void {
    let wishlist: any = JSON.parse(localStorage.getItem('wishlist'));
    let index: number = -1;
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


}

