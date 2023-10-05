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

  // get employee info
  getStoreEmployeeInfo(state: string): any {
    const url = `${this.storeInfoUrl}${state}/employees${this.jsonEXT}`;
    return this.http.get<Observable<any>>(url);
  }

  // post employee info
  saveStoreEmployeeInfo(state: string, data: any): any {
    const url = `${this.storeInfoUrl}${state}/employees${this.jsonEXT}`;
    return this.http.post(url, data);
  }

  deleteStoreEmployeeInfo(state: string, id: string): any {
    const url = `${this.storeInfoUrl}${state}/employees/${id}${this.jsonEXT}`;
    return this.http.delete(url);
  }

  editStoreEmployeeInfo(state: string, id: string, data: any): any {
    console.log(id, data);
    const url = `${this.storeInfoUrl}${state}/employees/${id}${this.jsonEXT}`;
    return this.http.patch(url, data);
  }

  getStoreContractorInfo(state: string): any {
    const url = `${this.storeInfoUrl}${state}/contractors${this.jsonEXT}`;
    return this.http.get<Observable<any>>(url);
  }
}
