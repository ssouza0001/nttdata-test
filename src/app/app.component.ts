import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nttdata-teste';
  hideLoading: boolean = false;

  getDisplayLoading(data: boolean): void {
    this.hideLoading = data;
  }

}
