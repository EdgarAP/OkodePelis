import {Genre} from "./genre";

export class Movie{
  title: string;
  id: string;
  overview: string;
  release_date: number;
  genres: Genre[];
  genre_ids : number[];
}
