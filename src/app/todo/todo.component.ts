import { Component, OnInit } from '@angular/core';
import { TodoService } from '../service/data/todo.service';
import { Todo } from '../models/todo';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todo:Todo[];

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {

  this.todoService.getUserTodoAllList('hello ajay sinfh').subscribe(
    response=>{
      console.log(response);
      this.todo =response;
      
    },error=>{
      console.log(error);
    }
  )


  

  }

  

}
