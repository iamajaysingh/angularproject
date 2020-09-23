import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Inject, Injectable } from '@angular/core';
import { User } from '../models/user';
@Injectable()
export class LoginGuard implements CanActivate{

    constructor(private router :Router){}

   canActivate(destination:ActivatedRouteSnapshot, state:RouterStateSnapshot){

    console.log("Login Guard");
    console.log(destination.component.toString);
    let loggedIn = Math.random() < 0.5;                                    

    if (!loggedIn) {                                                       
         alert("You're not logged in and will be redirected to Login page");
        this.router.navigate(["/login"]);                                  
     }

    return loggedIn;                                                            
    
}
}
