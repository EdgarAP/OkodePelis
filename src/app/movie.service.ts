import { Genre } from "./genre";
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
 
    getMovie(id: number): Promise<Movie> {
        const url = this.baseUrl + this.movie + id.toString() + this.apiKey + this.language;
        return this.http.get(url)
            //aplicamos el método extract para obtener solo lo necesario
            .map(this.extract)
            .toPromise()
            .then(res => res)
            .catch(this.error);
    }

    private extract(res: Response): Movie {
        let obj = res.json();
        return {
            title: obj.title,
            id: obj.id,
            overview: obj.overview,
            release_date: obj.release_date,
            genres: obj.genres,
            original_language: obj.original_language
        }
    }

    getMoviesByPopularity(): Promise<{ title: string, id: number }[]> {
        const url = this.baseUrl + this.movie + "popular" + this.apiKey + this.language;
        //creamos un array auxiliar
        let movList: { title: string, id: number }[] = [];
        return this.http.get(url).toPromise()
            .then(res => {
                //Para cada resultado del listado de películas devuelto
                res.json().results.forEach(mov => {
                    //cogemos el titulo y el id y lo guardamos en el array
                    movList.push({
                        title: mov.title,
                        id: mov.id
                    })
                    //devolvemos el array de tuplas titulo-id
                }); return movList as { title: string, id: number }[]
            }).catch(this.error);
    }

    private error(error: any): Promise<any> {
        //TO-DO Mejorar el control de errores
        console.error('Oops, ha ocurrido un error', error);
        return Promise.reject(error.message || error);
    }

}
