import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Global } from './models/global';
import {retry,catchError} from 'rxjs/operators'
import {Observable,throwError} from 'rxjs'; 
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrl='https://api.covid19api.com/summary';

  constructor(private http: HttpClient) { }

  httpOption = {
    headers:new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
    
    getSummary():Observable<any>{
      return this.http.get<any>(this.apiUrl);
    }
  
    

 
}
