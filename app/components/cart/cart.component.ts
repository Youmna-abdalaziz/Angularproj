import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductModel } from 'src/app/product-model';
import { ProductService } from 'src/app/product.service';
import { Item } from 'src/app/item-model';
import { CartService } from 'src/app/cart.service';


@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
	private items: Item[] = [];
	private total: number = 0;
	private totalcount: number = 0;

	constructor(private activatedRoute: ActivatedRoute, private router: Router,
		private productService: ProductService, private cartS: CartService) { }

	ngOnInit() {
		this.activatedRoute.params.subscribe(params => {
			var id = params['id'];
			if (id) {
				var item: Item = {
					product: this.productService.find(id),
					quantity: 1
				};
				if(!item.product){
					return this.router.navigate(['notfound']);
				  }
				if (localStorage.getItem('cart') == null) {
					let cart: any = [];
					cart.push(JSON.stringify(item));
					localStorage.setItem('cart', JSON.stringify(cart));


				} else {
					let cart: any = JSON.parse(localStorage.getItem('cart'));
					let index: number = -1;
					for (var i = 0; i < cart.length; i++) {
						let item: Item = JSON.parse(cart[i]);
						if (item.product.product_id == id) {
							index = i;
							break;
						}
					}
					if (index == -1) {
						cart.push(JSON.stringify(item));
						localStorage.setItem('cart', JSON.stringify(cart));

					} else {
						let item: Item = JSON.parse(cart[index]);
						item.quantity += 1;
						cart[index] = JSON.stringify(item);
						localStorage.setItem("cart", JSON.stringify(cart));

					}
				}
				this.loadCart();
			} else {
				this.loadCart();
			}
		});
	}
	loadCart(): void {
		this.total = 0;
		this.items = [];
		this.totalcount = 0;
		let cart = JSON.parse(localStorage.getItem('cart'));
		for (var i = 0; i < cart.length; i++) {
			let item = JSON.parse(cart[i]);
			this.items.push({
				product: item.product,
				quantity: item.quantity
			});
			this.total += item.product.price * item.quantity;
			this.totalcount += item.quantity;
			//this.cartS.setItems(this.items);
			//this.cartS.setCount(this.totalcount);
		}
		this.cartS.setItems(this.items);
		this.cartS.setCount(this.totalcount);
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


}