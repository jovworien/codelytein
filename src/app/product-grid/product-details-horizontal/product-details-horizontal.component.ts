import { Component } from '@angular/core';

@Component({
  selector: 'app-product-details-horizontal',
  templateUrl: './product-details-horizontal.component.html',
  styleUrl: './product-details-horizontal.component.css'
})
export class ProductDetailsHorizontalComponent {

  // Main image to display
  mainImage: string = '../images/productdetails/chair1.jpeg';

  // List of thumbnail images
  thumbnails: string[] = [
    '../images/productdetails/chair1.jpeg',
    '../images/productdetails/chair2.jpeg',
    '../images/productdetails/chair3.jpeg',
    '../images/productdetails/chair2.jpeg'
  ];

  // Method to update the main image
  updateMainImage(image: string): void {
    this.mainImage = image;
  }

}
