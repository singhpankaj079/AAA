import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpServiceService} from "./http-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AAA';
  showResponse: boolean = false;
  responseText: string = '';
  inputText: string = '';
  result: any;

  constructor(private httpService: HttpServiceService) {
  }

  onKeyUp(value: KeyboardEvent) {
    if (value.key === 'Enter') {
      this.httpService.getResponse(this.inputText).subscribe((response) => {
        this.result = JSON.parse(response[0].text);
        console.log(response);
      })
      this.showResponse = true;
    }
  }

  ngOnInit(): void {
  }

}
