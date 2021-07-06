import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchMovieService {

  constructor(private http: HttpClient) { }

  searchMovie(value: string) {
    // keys = 7ee163a8 or 4897472c 
    let url = 'http://www.omdbapi.com/?apikey=4897472c&s='+value
    return this.http.get(url);
  }
}

export interface Movie {
  Title:string;
  Year:String;
  imdbID:string;
  Type:string;
  Poster:string;
}
