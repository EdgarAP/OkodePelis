import { MovieService } from './movie.service';
import { Movie } from './movie';
import { Component, OnInit } from '@angular/core';

@Component({

    selector: 'app-movie-list',
    templateUrl: './movie-list.component.html',
    styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movieList: Movie[] = [];

    constructor(private movieService: MovieService) { }

    ngOnInit(): void {
        this.movieService.getMoviesByPopularity()
            .then(movies => this.movieList = movies);
    }

}
