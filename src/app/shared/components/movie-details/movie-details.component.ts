import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/store';
import { map } from 'rxjs';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent {

  favItem: boolean = false;

  @Input() hideLoading!: boolean;

  constructor(private store: Store<{movie: IAppState}>) {}

  movie$ = this.store.select('movie').pipe(
    map(
      m => m.movieData
      )
  );

  setFavorite(): boolean {
    if(!this.favItem) {
      this.favItem = true;
      return this.favItem;
    } else {
      this.favItem = false;
      return this.favItem;
    };
  }

  convertRanking(data: string): number{
    return +data.substring(0,data.indexOf("/")) / 2;
  }

}
