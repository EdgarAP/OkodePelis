import { MovieService } from './movie.service';
import { Movie } from './movie';
import { Component, OnInit } from '@angular/core';
import { Genre } from './genre';
import {Router} from '@angular/router';


@Component({

    selector: 'app-movie-list',
    templateUrl: './movie-list.component.html',
    styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

    movieList: { title: string, id: number }[] = [];
    title = "Lista de películas ordenadas por popularidad";

    selectedMovie: Movie;


    constructor(
        private movieService: MovieService,
        private router: Router) { }

    ngOnInit(): void {

        //Inicializamos movieList
        this.movieService.getMoviesByPopularity()
            .then(movies => this.movieList = movies);


    }

    onSelect(movie: Movie): void {
        this.selectedMovie = movie;
        this.goToDetails();
    }

    goToDetails(): void {
        this.router.navigate(['/detail', this.selectedMovie.id]);
    }

}
