import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class User{

  constructor(
   public  id:Number,
  public  username:String,
   public password:String){}

}