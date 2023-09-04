import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Urls } from 'src/app/shared/enums/urls.enum';
import { Movie } from 'src/app/shared/models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class SearchMovieService {

  constructor(private http: HttpClient) { }

  getMovieData(id: string): Observable<Movie> {
    let key = 'ddba13c8';
    return this.http.get<Movie>(Urls.SEARCH, { params: { t: id, apikey:  key} })
  }
}
