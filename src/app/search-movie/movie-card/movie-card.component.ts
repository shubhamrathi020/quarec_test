import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../search-movie.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.less']
})
export class MovieCardComponent implements OnInit {

  movie: Movie = {
    Title: "",
    Year: "",
    imdbID: "",
    Type: "",
    Poster: "",
  }
  @Input() moviesData: Movie = this.movie;

  constructor() { }

  ngOnInit(): void {
  }

}