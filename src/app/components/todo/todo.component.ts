import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ITodo } from 'src/app/models/todo.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  @Input() set todo(todo: ITodo) {
    this._todo = todo;
  }
  get todo() {
    return this._todo;
  }

  private _todo: ITodo;

  constructor() {}

  ngOnInit(): void {}

  public onCompleteTodo(todo: ITodo): void {
    todo.isCompleted = true;
  }

  public onArchaiveTodo(): void {
    this.todo.isArchived = true;
  }
}
