import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITsqRequest } from '../models/tsq-result.model';

@Injectable({
  providedIn: 'root',
})
export class TsqResultService {
  constructor(private http: HttpClient) {}

  getQueryDir(reqPayload: {
    source: string;
    destination: string;
    service: string;
    entity: string;
  }) {
    const queryReqPayload: ITsqRequest = {
      source_text: this.convertVal(reqPayload.source),
      dest_text: this.convertVal(reqPayload.destination),
      serv_select: this.convertVal(reqPayload.service),
      SelectedFirewalls: reqPayload.entity,
      negate_src: false,
      negate_dst: false,
      ButtonPressed: 'run',
      src_user_text: '',
      application_select: '',
      query_name: '',
      query_text: '',
      inFrm: '',
      qry_select: '',
    };
    const httpOptions = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      params: new HttpParams(),
      responseType: 'json' as const,
      contentType: 'application/json; charset=utf-8' as const,
    };

    return this.http.post<string>(
      '/afa/php/query_handler.php',
      JSON.stringify(queryReqPayload),
      httpOptions
    );
  }

  convertVal(val: string) {
    return val.toLowerCase() === 'any' ? '*' : val;
  }
}
