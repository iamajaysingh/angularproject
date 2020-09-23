import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Student} from '../../models/student';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http:HttpClient) { }

  getSpringData(){
     return this.http.get<Student>('http://localhost:8090/get-student')
    //console.log("hello this is service function");
  }
}
