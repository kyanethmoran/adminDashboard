import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  storeInfoUrl =
    'https://angularadmindashboard-d1a76-default-rtdb.firebaseio.com/States/';
  jsonEXT = '.json';

  constructor(public http: HttpClient) {}

  getStoreEmployeeInfo(state: string): any {
    const url = `${this.storeInfoUrl}${state}/employees${this.jsonEXT}`;
    return this.http.get<Observable<any>>(url);
  }

  getStoreContractorInfo(state: string): any {
    const url = `${this.storeInfoUrl}${state}/contractors${this.jsonEXT}`;
    return this.http.get<Observable<any>>(url);
  }
}
