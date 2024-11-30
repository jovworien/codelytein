import { Component } from '@angular/core';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.css']
})
export class ShoesComponent {
  // Array of shoes with details (image, name, price)
  shoes = [
    {
      image: '../images/shoes/s.png',
      name: 'Nike Zoom Air',
      price: 260
    },
    {
      image: '../images/shoes/s2.png',
      name: 'Nike Air Max',
      price: 300
    },
    {
      image: '../images/shoes/s3.png',
      name: 'Nike React Infinity',
      price: 280
    },
    {
      image: '../images/shoes/s2.png',
      name: 'Nike Pegasus',
      price: 250
    }
  ];

  // Currently selected shoe
  currentShoe = this.shoes[0];

  // Method to update the main image, name, and price when a thumbnail is clicked
  updateCurrentShoe(shoe: any): void {
    this.currentShoe = shoe;
  }
}
