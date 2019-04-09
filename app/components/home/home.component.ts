import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductModel } from 'src/app/product-model';
import { ProductService } from 'src/app/product.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private products: ProductModel[];
  
  constructor(private router: Router, private route: ActivatedRoute, private productService: ProductService) { }
  goTo(path: string): void {
    this.router.navigate([path]);
  }
  singleProduct(): void {
    this.router.navigate(['/singleproduct']);
  }
  navigateTo(path: string, id: string): void {
    this.router.navigate([path, id]);
  }

  ngOnInit() {
    this.products = this.productService.findAll();
  }

}
