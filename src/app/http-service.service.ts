import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  public url: string = 'http://172.27.176.42:5005/webhooks/rest/webhook';

  getResponse<T>(prompt: string): Observable<T> {
    return this.httpClient.post<T>(this.url, {'sender': 'user', 'message': prompt});
  }

  constructor(private httpClient: HttpClient) {
  }
}
