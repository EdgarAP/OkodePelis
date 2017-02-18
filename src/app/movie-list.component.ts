import { MovieService } from './movie.service';
import { Movie } from './movie';
import { Component, OnInit } from '@angular/core';
import { Genre } from './genre';

@Component({

    selector: 'app-movie-list',
    templateUrl: './movie-list.component.html',
    styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

    movieList: Movie[] = [];
    genresList: Genre[];
    title = "Lista de películas ordenadas por popularidad";

    selectedMovie: Movie;


    constructor(private movieService: MovieService) { }

    ngOnInit(): void {
        //Inicializamos genresList
        this.movieService.getGenres().then(genres => this.genresList = genres);
        //Inicializamos movieList
        this.movieService.getMoviesByPopularity()
            .then(movies => this.movieList = movies);
    }

    getGenreName(id: Number): string {
        return this.genresList.find(genre => genre.id == id).name;
    }

    onSelect(movie: Movie): void {
        this.selectedMovie = movie;
    }

}
