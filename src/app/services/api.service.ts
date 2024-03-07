import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { switchMap, map } from 'rxjs';
import { ITsqRequest } from '../models/tsq-result.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  actionToApiCallMap = {
    action_tsq: this.getTsqResultsLink,
    action_show_risks_for_device: this.getLatestReportLink,
    action_show_report_for_device: this.getRisksPageLink,
  };

  getTsqResultsLink(reqPayload: {
    source: string;
    destination: string;
    service: string;
    entity?: string;
  }) {
    const queryReqPayload: ITsqRequest = {
      source_text: this.convertVal(reqPayload.source),
      dest_text: this.convertVal(reqPayload.destination),
      serv_select: this.convertVal(reqPayload.service),
      SelectedFirewalls: reqPayload.entity || 'ALL_FIREWALLS',
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

    return this.http
      .post<string>(
        '/afa/php/query_handler.php',
        JSON.stringify(queryReqPayload),
        httpOptions
      )
      .pipe(
        map((res) => {
          if (res['LAST_ERROR']) {
            throw new Error(res['LAST_ERROR']);
          }
          return `/algosec-ui/query-result?queryPath=${res['queryPathIdentifier']}`;
        })
      );
  }

  convertVal(val: string) {
    return val.toLowerCase() === 'any' ? '*' : val;
  }

  getLatestReportLink(device: string) {
    return this.http.get('assets/devicesDisplayToTreeNameMap.json').pipe(
      switchMap((devicesDisplayToTreeNameMap) => {
        return this.http.get(
          `/api/v1/report/findLastReport?device=${devicesDisplayToTreeNameMap[device]}`
        );
      }),
      map((res: any) => `/algosec-ui/report/${res.reportId}`)
    );
  }

  getRisksPageLink(device: string) {
    return this.getLatestReportLink(device).pipe(map((res) => `${res}/risks`));
  }
}
