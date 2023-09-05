import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Movie } from '../../models/movie.model';
import { map } from 'rxjs';
import { SearchMovieService } from 'src/app/core/services/search-movie.service';
import { IAppState, setMovieData } from 'src/store';
import { Store } from '@ngrx/store';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchForm!: FormGroup;
  movieData!: Movie | null;
  hideLoading: boolean = true;
  @Output() outputHideLoading = new EventEmitter();


  constructor(
    private fb: FormBuilder,
    private service: SearchMovieService,
    private _snackBar: MatSnackBar,
    private store: Store<{movie: IAppState}>,
    ){}

  movie$ = this.store.select('movie').pipe(map(e => e.movieData));


  ngOnInit(): void {
    this.outputHideLoading.emit(true);
    this.searchForm = this.fb.group({
      search: ['', [Validators.required]]
    });

    this.store.dispatch(setMovieData({ data: null }));


  }

  openSnackBar() {
    let action = 'close';
    let message = 'Movie was not found!';
    this._snackBar.open(message, action, {
      duration: 2500
     });
  }

  reset(): void {

    this.searchForm.reset();
    this.store.dispatch(setMovieData({ data: null }));
  }

  search(): void {
    if (this.searchForm.valid) {
      this.hideLoading = false;
      this.outputHideLoading.emit(false);
      this.service.getMovieData(this.searchForm.value.search).subscribe({
        next:(data) => {
          if (data.Response === 'False') {
            this.openSnackBar();
            this.movieData = null;
            this.store.dispatch(setMovieData({ data: this.movieData }));

          } else {
            this.movieData = data;
            this.store.dispatch(setMovieData({ data: this.movieData }));
          }

        },
        error: (e: Error) => {
          console.log(e);
        },
        complete: () => {
          this.outputHideLoading.emit(true);
          this.hideLoading = true;
        }
      });

    }
  }


}
