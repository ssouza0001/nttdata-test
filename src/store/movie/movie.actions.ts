import { createAction, props } from '@ngrx/store';
import { Movie } from 'src/app/shared/models/movie.model';

export const setMovieData = createAction(
  '[Movie] Set Movie Data',
  props<{ data: Movie | null }>()
);
