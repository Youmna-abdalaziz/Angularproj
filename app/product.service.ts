import { Injectable } from '@angular/core';
import { ProductModel } from './product-model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: ProductModel[];


  constructor(private router: Router) {
    this.products = [
      {
        "product_id": "1",
        "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
        "name": "CHECK PRINT SHIRT",
        "price": 110
      },
      {
        "product_id": "2",
        "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
        "name": "GLORIA HIGH LOGO SNEAKER",
        "price": 91
      },
      {
        "product_id": "3",
        "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/HWVG6216060-TAN?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
        "name": "CATE RIGID BAG",
        "price": 94.5
      },
      {
        "product_id": "4",
        "imgUrl": "http://guesseu.scene7.com/is/image/GuessEU/WC0001FMSWC-G5?wid=520&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
        "name": "GUESS CONNECT WATCH",
        "price": 438.9
      },
      {
        "product_id": "5",
        "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
        "name": "70s RETRO GLAM KEFIAH",
        "price": 20
      },
      {
        "product_id": "6",
        "imgUrl": "https://lp2.hm.com/hmgoepprod?set=source[/0e/c2/0ec26e3a9ba2ff931e3b6366666e5f1fa80c38e2.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[1]&call=url[file:/product/main]",
        "name": "baby Dress",
        "price": 40
      },
      {
        "product_id": "7",
        "imgUrl": "https://www.beatrix-potter-shop.co.uk/app/uploads/2017/06/a28292_1.jpg",
        "name": "Scarf2",
        "price": 45
      },
      {
        "product_id": "8",
        "imgUrl": "https://www.nationalgallery.co.uk/static/images/products/detail/1008149.jpg",
        "name": "Scarf3",
        "price": 50
      },
      {
        "product_id": "9",
        "imgUrl": "https://ae01.alicdn.com/kf/HTB1NMZ5XbuWBuNjSszgq6z8jVXat/2019-summer-scarf-fashion-silk-scarves-for-women-spring-lady-shawls-and-wraps-print-soft-elegant.jpg_640x640.jpg",
        "name": "Scarf4",
        "price": 60
      }
    ];
  }
  findAll(): ProductModel[] {
    return this.products;
  }
  find(id: string): ProductModel {
  
    return this.products[this.getSelectedIndex(id)];

  }

  private getSelectedIndex(id: string) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].product_id == id) {
        return i;
      }
    }
    return -1;
  }
}

