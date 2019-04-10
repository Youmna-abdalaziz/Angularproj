import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/product-model';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})

export class ProductdetailsComponent implements OnInit {
  private product: ProductModel;
  public id;

  constructor(private router: Router, private route: ActivatedRoute, private productService: ProductService) {
    this.id = this.route.params['value'].id;
  }

  goTo(path: string): void {
    this.router.navigate([path]);
  }
  navigateTo(path: string, id: string): void {
    this.router.navigate([path, id]);
  }

  ngOnInit() {
    this.product = this.productService.find(this.id);
    if(!this.product){
      this.router.navigate(['notfound']);
    }
  }

}
