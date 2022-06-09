import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ITodo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private _todos: Array<ITodo> = [];

  private _todoSubject: BehaviorSubject<Array<ITodo>> = new BehaviorSubject(
    this._todos
  );

  private _singleTodoSubject: BehaviorSubject<ITodo> = new BehaviorSubject(
    this._todos.length ? this._todos[0] : null
  );

  constructor() {}

  public getTodoes(): Observable<Array<ITodo>> {
    return this._todoSubject.asObservable();
  }
  public getSelectedTodo(): Observable<ITodo> {
    return this._singleTodoSubject.asObservable();
  }
  public setSelectedTodo(todo: ITodo) {
    this._singleTodoSubject.next(todo);
  }
  public addNewTodo(newTodo: ITodo): void {
    console.log(newTodo);
    const exitingTodos: Array<ITodo> = this._todoSubject.value;
    exitingTodos.push(newTodo);
    this._todoSubject.next(exitingTodos);
  }
}
