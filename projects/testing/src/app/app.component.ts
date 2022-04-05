import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testing';


  isLoading = false;


  ngOnInit() {
    this.isLoading = true;
    setTimeout(() => {
        this.isLoading = false;
    }, 5000);
  }
}
