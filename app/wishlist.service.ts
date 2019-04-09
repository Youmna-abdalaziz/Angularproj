import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductModel } from 'src/app/product-model';
@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  items: BehaviorSubject<ProductModel[]> = new BehaviorSubject([]);
  totalcount: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor() { }
  setItems(val: ProductModel[]): void {
    this.items.next(val);
  }
  setCount(val: number): void {
    this.totalcount.next(val);
  }
  getItems() {
    return this.items.asObservable();
  }
  getCount() {
    return this.totalcount.asObservable();
  }
}
