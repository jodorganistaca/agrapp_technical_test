import { Component, OnInit } from '@angular/core';

import { Movie } from '../movie/movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.sass']
})
export class MoviesListComponent implements OnInit {
  moviesTrending: Movie[] | undefined;
  
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getMoviesTrending()
  }

  getMoviesTrending(): void {
    this.movieService.getTrendingMovies("day").subscribe(movTrdRes => {
      console.log("holaaaa ", movTrdRes)
      this.moviesTrending = movTrdRes
      console.log("adioos ", this.moviesTrending)
    });
  }

}
