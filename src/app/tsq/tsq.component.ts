import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-tsq',
  templateUrl: './tsq.component.html',
  styleUrls: ['./tsq.component.css']
})
export class TSQComponent implements OnInit {
  @Input() prompt: string = 'Do you wish to check this traffic?';
  @Input() source: string = 'source';
  @Input() destination: string = 'destination';
  @Input() service: string = 'service';
  @Input() result: any;
  constructor(private httpClient: HttpClient) {

  }

  ngOnInit(): void {

  }

  protected readonly Object = Object;
}
