import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from 'src/app/item-model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: BehaviorSubject <Item[]> = new BehaviorSubject([]);
  totalcount: BehaviorSubject <number> = new BehaviorSubject(0);


  constructor() { }
  setItems(val:Item[]):void{
    this.items.next(val);
  }
  setCount(val:number):void{
    this.totalcount.next(val);
  }
  getItems(){
    return this.items.asObservable();
  }
  getCount(){
    return this.totalcount.asObservable();
  }
}
