import { MovieService } from "./movie.service";
import{ActivatedRoute, Params} from '@angular/router';
import { Movie } from "./movie";
import { Component, OnInit, Input } from '@angular/core';
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'app-movie-detail',
    templateUrl: './movie-detail.component.html',
    styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

    @Input()
    selectedMovie: Movie;

    constructor(
        private movieService: MovieService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit() {
        this.route.params.switchMap(
          (params: Params) =>
          this.movieService.getMovie(+params['id']))
          .subscribe(movie => this.selectedMovie = movie);
    }

    goBack(): void{
      this.location.back();
    }

}
