import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  constructor(private router: Router) {}

  addToCart() {
    this.router.navigate(['/cartbuy-namedesc']);
  }
  

}
