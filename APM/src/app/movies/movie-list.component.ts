import { Component } from '@angular/core';

@Component({
        selector: 'pm-movies',
        templateUrl: './movie-list.component.html'
    })

export class MovieListComponent {
    pageTitle = 'Movie List';
    movies: any[] =[
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
    "price": 32.99,
    "starRating": 4.2,
    "imageUrl": "assets/images/garden_cart.png"
  }
    ];
}
