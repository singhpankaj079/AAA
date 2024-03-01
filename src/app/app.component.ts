import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AAA';
  showResponse: boolean = false;
  input: string = '';
  onKeyUp(value: KeyboardEvent) {
    if (value.key === 'Enter') {
      this.showResponse = true;
    }
  }
}
