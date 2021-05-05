import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

import { Movie } from '../movie/movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent implements OnInit {
  moviesTrending: Movie[] | undefined;
  
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getMoviesTrending()
  }

  getMoviesTrending(): void {
    this.movieService.getTrendingMovies("day").subscribe(movTrdRes => {
      this.moviesTrending = movTrdRes
    });
  }

  getTvsTrending(): void {
    this.movieService.getTrendingTvs("day").subscribe(movTrdRes => {
      this.moviesTrending = movTrdRes
    });
  }

}
