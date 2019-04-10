import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from 'src/app/product-model';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/product.service';
@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {
  @Input('product') product: ProductModel;
  constructor(private router: Router, private route: ActivatedRoute) { }

  navigateTo(path: string, id: string): void {
    this.router.navigate([path, id]);
  }
  ngOnInit() {
  }

}
