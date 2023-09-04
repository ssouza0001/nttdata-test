import { Movie } from "src/app/shared/models/movie.model";

export interface IAppState {
  movieData: Movie | null;
}

export const initialState: IAppState = {
  movieData: null
};
