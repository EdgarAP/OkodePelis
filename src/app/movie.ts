import {Genre} from "./genre";

export interface Movie{
  title: string;
  id: string;
  overview: string;
  release_date: number;
  genres: Genre[];
  original_language : string;
}
