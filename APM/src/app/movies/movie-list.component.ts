import { Component, OnInit } from '@angular/core';
import { IMovie} from './movie';
@Component({
        selector: 'pm-movies',
        templateUrl: './movie-list.component.html',
        styleUrls: ['./movie-list.component.css']
    })

export class MovieListComponent implements OnInit {
    pageTitle = 'Movie List';
    imageWidth = 100;
    imageMargin = 5;
    showImage = false;
    listFilter = 'cart';
    movies: IMovie[] = [
    {
    "movieId": 1,
    "movieName": "Leaf Rake",
    "movieCode": "GDN-0011",
    "releaseDate": "March 19, 2019",
    "description": "Leaf rake with 48-inch wooden handle.",
    "price": 19.95,
    "starRating": 3.2,
    "imageUrl": "assets/images/leaf_rake.png"
  },
  {
    "movieId": 2,
    "movieName": "Garden Cart",
    "movieCode": "GDN-0023",
    "releaseDate": "March 18, 2019",
    "description": "15 gallon capacity rolling garden cart",
    "price": 32.9,
    "starRating": 4.2,
    "imageUrl": "assets/images/garden_cart.png"
  }
  ];

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        console.log("hey");
    }
}
