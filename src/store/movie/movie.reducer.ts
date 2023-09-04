import { createReducer, on } from '@ngrx/store';
import { setMovieData } from './movie.actions';
import { initialState } from '../app.state';


export const movieReducer = createReducer(
  initialState,
  on(setMovieData, (state, { data }) => ({
    ...state,
    movieData: data
  }))
);
