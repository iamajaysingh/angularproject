import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route:Router) { }

  username: string= '';
  password: string='';
  isvalidLogin: boolean = true;
  role:string='';
  user:User;

  ngOnInit(): void {
  }

  getLoginInput(){

    
    if(this.username ==='iamajay' && this.password === '1234'){
      
      //this.user.id =1;
      new User( 1, this.username,this.password);
     

      this.route.navigate(["/welcome",this.username],{queryParams:{role:'admin'}});
    }
    
    //this.isvalidLogin=false;


    console.log(this.username);
  }

}
