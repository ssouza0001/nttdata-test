import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MovieDetailsComponent } from './shared/components/movie-details/movie-details.component';
import { movieReducer } from 'src/store/movie/movie.reducer';
import { SearchComponent } from './shared/components/search/search.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MovieDetailsComponent,
    SearchComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    StoreModule.forRoot({movie: movieReducer}),
    NgbModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    BrowserAnimationsModule
  ],
  providers: [MatSnackBarModule, {
    provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
    useValue: { panelClass: ['my-snackbar'] },
  },],
  exports: [SearchComponent, FooterComponent, HeaderComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
