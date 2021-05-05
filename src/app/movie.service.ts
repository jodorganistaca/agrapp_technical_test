import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Movie } from './movie/movie';
import { HttpErrorHandler, HandleError } from './http-error-handler.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  apiKey: string;
  apiMovie: string;
  private handleError: HandleError;

  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.apiKey = environment.API_KEY;
    this.apiMovie = "https://api.themoviedb.org/3"
    this.handleError = httpErrorHandler.createHandleError('HeroesService');

 }

  getTrendingMovies(timeWindow: string): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.apiMovie}/trending/movie/${timeWindow}?api_key=${this.apiKey}`)
      .pipe(
        map(res => res['results'])
      );
  }

  getTrendingTvs(timeWindow: string): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.apiMovie}/trending/tv/${timeWindow}?api_key=${this.apiKey}`)
      .pipe(
        map(res => res['results'])
      );
    }
}
