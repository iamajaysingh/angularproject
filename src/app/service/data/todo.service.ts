import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) { }


  getUserTodoAllList(_username){
    //using todo array since will have multiple todo list
    //here have tick 
 return this.http.get<Todo[]>(`http://localhost:8090/user/${_username}/todo`);

  }
}
