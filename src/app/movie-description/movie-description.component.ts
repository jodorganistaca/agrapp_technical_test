import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { from, Observable } from 'rxjs';
import { MovieService } from '../movie.service';
import { Movie } from '../movie/movie'

@Component({
  selector: 'app-movie-description',
  templateUrl: './movie-description.component.html',
  styleUrls: ['./movie-description.component.css']
})
export class MovieDescriptionComponent implements OnInit {
  movie!: Movie;
  id: string | undefined | null;
  media: string | undefined | null;
  tv = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: MovieService,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => { 
      console.log("paraams ", params);
      this.id = params.get('id');   
      this.media = params.get('media');   
      if(this.id != undefined && this.id != null && this.media != undefined && this.media != null){
        this.service.getMovieById(this.id, this.media).subscribe(res => {
          this.movie = res
        });
      }else{
        this.service.getMovieById("460465", "movie").subscribe(res => {
          console.log("reeees ", res)
          this.movie = res
        });
      }  
      console.log(this.movie)
   });
  }

}
