import { Component, OnInit } from '@angular/core';
import { Todo } from './Todo';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];

  constructor() {
    this.todos = [
      {
        sno: 1,
        title: "item 1",
        desc: "this is description",
        active: true
      },
      {
        sno: 2,
        title: "item 1",
        desc: "this is description",
        active: true
      },
      {
        sno: 3,
        title: "item 1",
        desc: "this is description",
        active: true
      },

    ];
  }

  ngOnInit(): void {
  }

  deleteTodo(todo: Todo) {
    let index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }

}
