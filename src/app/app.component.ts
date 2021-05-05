import { Component, OnInit } from '@angular/core';
import { Movie } from './movie/movie';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
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
