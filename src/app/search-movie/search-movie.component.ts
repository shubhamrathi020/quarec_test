import { Component, OnInit } from '@angular/core';
import { Movie, SearchMovieService } from './search-movie.service';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.less']
})
export class SearchMovieComponent implements OnInit {

  searchedMovies: any;
  haveMovie: any;

  constructor(private movieService: SearchMovieService) { }

  ngOnInit(): void {
  }

  searchMovie(value: string) {
    this.movieService.searchMovie(value).subscribe((data: any) => {
      this.searchedMovies = data.Search;
      this.haveMovie = data.Response
    }, (error) => {
      console.log(error)
    })
  }

}

