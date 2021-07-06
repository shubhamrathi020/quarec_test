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
    // return of({ "Search": [
    //     { "Title": "Avatar", "Year": "2009", "imdbID": "tt0499549", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg" }, 
    //     { "Title": "Avatar: The Last Airbender", "Year": "2005–", "imdbID": "tt0417299", "Type": "series", "Poster": "https://m.media-amazon.com/images/M/MV5BODc5YTBhMTItMjhkNi00ZTIxLWI0YjAtNTZmOTY0YjRlZGQ0XkEyXkFqcGdeQXVyODUwNjEzMzg@._V1_SX300.jpg" }, 
    //     { "Title": "Avatar: The Last Airbender - The Legend of Aang", "Year": "2006", "imdbID": "tt0959552", "Type": "game", "Poster": "https://m.media-amazon.com/images/M/MV5BNjUwNzA5Nzc4N15BMl5BanBnXkFtZTgwNjM1ODY4MDE@._V1_SX300.jpg" }, 
    //     { "Title": "The King's Avatar", "Year": "2019", "imdbID": "tt10732794", "Type": "series", "Poster": "https://m.media-amazon.com/images/M/MV5BOGMxZDc1N2ItODI3NS00MDIwLWJkYzAtMTgyMDZlN2FlNGYzXkEyXkFqcGdeQXVyMjQ0OTYxOTc@._V1_SX300.jpg" }, 
    //     { "Title": "Avatar: The Game", "Year": "2009", "imdbID": "tt1517155", "Type": "game", "Poster": "https://m.media-amazon.com/images/M/MV5BMTYxODI2OTI4MF5BMl5BanBnXkFtZTcwNjI1NzMwMw@@._V1_SX300.jpg" }, 
    //     { "Title": "Avatar: The Last Airbender - Into the Inferno", "Year": "2008", "imdbID": "tt1459460", "Type": "game", "Poster": "https://m.media-amazon.com/images/M/MV5BOWFjYWUwZTMtNjM2Mi00YjU3LWI2NjQtZTNhOTRhM2Q3YmJkXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_SX300.jpg" }, 
    //     { "Title": "Avatar Spirits", "Year": "2010", "imdbID": "tt1900832", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BMzQ4MDMxNjExNl5BMl5BanBnXkFtZTgwOTYzODI5NTE@._V1_SX300.jpg" }, 
    //     { "Title": "Avatar: Creating the World of Pandora", "Year": "2010", "imdbID": "tt1599280", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BYjk4ZDAxN2MtYjhlNy00MzJhLWI1MGYtYjY5ZGJlY2YwMzNlXkEyXkFqcGdeQXVyNTc0NjY1ODk@._V1_SX300.jpg" }, 
    //     { "Title": "Avatar: The Last Airbender - The Burning Earth", "Year": "2007", "imdbID": "tt1459461", "Type": "game", "Poster": "https://m.media-amazon.com/images/M/MV5BM2M5N2FkY2EtMTJmMy00NjdmLWEwYmEtYjljOWI0MjQ1M2MyXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_SX300.jpg" }, 
    //     { "Title": "The Guild: Do You Wanna Date My Avatar", "Year": "2009", "imdbID": "tt3051150", "Type": "movie", "Poster": "N/A" }
    //   ], "totalResults": "67", "Response": "True" 
    // })
  }
}

export interface Movie {
  Title:string;
  Year:String;
  imdbID:string;
  Type:string;
  Poster:string;
}

// let data = { "Search": [
//   { "Title": "Avatar", "Year": "2009", "imdbID": "tt0499549", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg" }, 
//   { "Title": "Avatar: The Last Airbender", "Year": "2005–", "imdbID": "tt0417299", "Type": "series", "Poster": "https://m.media-amazon.com/images/M/MV5BODc5YTBhMTItMjhkNi00ZTIxLWI0YjAtNTZmOTY0YjRlZGQ0XkEyXkFqcGdeQXVyODUwNjEzMzg@._V1_SX300.jpg" }, 
//   { "Title": "Avatar: The Last Airbender - The Legend of Aang", "Year": "2006", "imdbID": "tt0959552", "Type": "game", "Poster": "https://m.media-amazon.com/images/M/MV5BNjUwNzA5Nzc4N15BMl5BanBnXkFtZTgwNjM1ODY4MDE@._V1_SX300.jpg" }, 
//   { "Title": "The King's Avatar", "Year": "2019", "imdbID": "tt10732794", "Type": "series", "Poster": "https://m.media-amazon.com/images/M/MV5BOGMxZDc1N2ItODI3NS00MDIwLWJkYzAtMTgyMDZlN2FlNGYzXkEyXkFqcGdeQXVyMjQ0OTYxOTc@._V1_SX300.jpg" }, 
//   { "Title": "Avatar: The Game", "Year": "2009", "imdbID": "tt1517155", "Type": "game", "Poster": "https://m.media-amazon.com/images/M/MV5BMTYxODI2OTI4MF5BMl5BanBnXkFtZTcwNjI1NzMwMw@@._V1_SX300.jpg" }, 
//   { "Title": "Avatar: The Last Airbender - Into the Inferno", "Year": "2008", "imdbID": "tt1459460", "Type": "game", "Poster": "https://m.media-amazon.com/images/M/MV5BOWFjYWUwZTMtNjM2Mi00YjU3LWI2NjQtZTNhOTRhM2Q3YmJkXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_SX300.jpg" }, 
//   { "Title": "Avatar Spirits", "Year": "2010", "imdbID": "tt1900832", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BMzQ4MDMxNjExNl5BMl5BanBnXkFtZTgwOTYzODI5NTE@._V1_SX300.jpg" }, 
//   { "Title": "Avatar: Creating the World of Pandora", "Year": "2010", "imdbID": "tt1599280", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BYjk4ZDAxN2MtYjhlNy00MzJhLWI1MGYtYjY5ZGJlY2YwMzNlXkEyXkFqcGdeQXVyNTc0NjY1ODk@._V1_SX300.jpg" }, 
//   { "Title": "Avatar: The Last Airbender - The Burning Earth", "Year": "2007", "imdbID": "tt1459461", "Type": "game", "Poster": "https://m.media-amazon.com/images/M/MV5BM2M5N2FkY2EtMTJmMy00NjdmLWEwYmEtYjljOWI0MjQ1M2MyXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_SX300.jpg" }, 
//   { "Title": "The Guild: Do You Wanna Date My Avatar", "Year": "2009", "imdbID": "tt3051150", "Type": "movie", "Poster": "N/A" }
// ], "totalResults": "67", "Response": "True" }
