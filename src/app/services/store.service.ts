import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  storeInfoUrl =
    'https://angularadmindashboard-d1a76-default-rtdb.firebaseio.com/States/';
  jsonEXT = '.json';

  constructor(public http: HttpClient) {}

  getStoreEmployeeInfo(state: any): any {
    const url = `${this.storeInfoUrl}${state}/employees${this.jsonEXT}`;
    return this.http.get<any>(url);
  }
}
