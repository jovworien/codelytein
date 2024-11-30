// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-shoes',
//   templateUrl: './shoes.component.html',
//   styleUrl: './shoes.component.css'
// })
// export class ShoesComponent {

// }


import { Component } from '@angular/core';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.css']
})
export class ShoesComponent {

  // Main image displayed on the hero section
  mainShoeImage: string = '../images/shoes/s.png';

  // Thumbnail images to be displayed in the thumbnail section
  thumbnailImages: string[] = [
    '../images/shoes/s2.png',
    '../images/shoes/s3.png',
    '../images/shoes/s2.png',
    '../images/shoes/s.png'
  ];

  // Method to update the main image when a thumbnail is clicked
  updateMainImage(image: string): void {
    this.mainShoeImage = image;
  }
}
