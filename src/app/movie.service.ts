import {Genre} from "./genre";
import { Http, Response } from "@angular/http";
import { Injectable } from '@angular/core';
import { Movie } from './movie'
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieService {

    private baseUrl = "https://api.themoviedb.org/3/";
    private movie = "movie/";
    private genre = "genre/"
    private apiKey = "?api_key=6cbed7ab057be06930d0c3e8a878b8c9";
    private language = "&language=es-ES"

    constructor(private http: Http) { }

    getMovie(id: Number): Promise<Movie> {
        const url = this.baseUrl + this.movie + id.toString() + this.apiKey + this.language;
        return this.http.get(url).toPromise()
            .then(res => res.json() as Movie)
            .catch(this.error);

    }

    getMoviesByPopularity(): Promise<Movie[]> {
        const url = this.baseUrl + this.movie + "popular" + this.apiKey + this.language;
        return this.http.get(url).toPromise()
            .then(res => res.json().results as Movie[])
            .catch(this.error);
    }

    getGenres(): Promise<Genre[]> {
        const url = this.baseUrl + this.genre + this.movie + "list" + this.apiKey + this.language;
        return this.http.get(url).toPromise()
        .then(res => res.json().genres as Genre[])
        .catch(this.error);
    }



    private error(error: any): Promise<any> {
        //TO-DO Mejorar el control de errores
        console.error('Oops, ha ocurrido un error', error);
        return Promise.reject(error.message || error);
    }

}
