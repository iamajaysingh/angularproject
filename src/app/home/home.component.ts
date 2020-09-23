import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import { Global } from '../models/global';
import { WelcomeDataService } from '../service/data/welcome-data.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user$:Global;
  _posts:[];
  _error:[];
  name:string;
  fatherName:string;
  stream:string;
  errorMessage:String;
  headerUsername:String='';
  userRole:String='User';
  search:FormControl = new FormControl();refrence
  

  constructor(private dataService:DataService, private service:WelcomeDataService,private routeParam:ActivatedRoute) {
// once the parameter value is passed to the component never change
    //this.headerUsername =routeParm.snapshot.paramMap.get('name') ;

    routeParam.paramMap.subscribe(
    params =>  this.headerUsername = params.get('name')

    );
   this.userRole= routeParam.snapshot.queryParamMap.get('role');
    console.log(this.userRole);

   }

  getMessage(){
    this.service.getSpringData().subscribe(
      response=> this.handleSuccessMessage(response), error=> this.handleErrorMessage(error)
    )
    //this.message="hello i'm the spring data";
  }

  ngOnInit(): void {
  this.dataService.getSummary().subscribe(
    response => {
      console.log(response);
      this._posts = response;


    },
    error => {
      this._error = error;
    }
  );



  }
 handleErrorMessage(error)
 {
   this.errorMessage = error.error.message;
    console.log(error.error.message);
 } 
 handleSuccessMessage(response){
    this.name = response.name;
    this.fatherName = response.fatherName;
    this.stream = response.stream;

  }

}

