import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ITodo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private mock: ITodo[] = [
    {
      id: 1,
      title: 'Fox, asian red',
      description: 'Vulpes vulpes',
      isCompleted: false,
      isArchived: false,
      endDate: '7/17/2021',
      selected: true,
    },
    {
      id: 2,
      title: 'Gazer, sun',
      description: 'Cordylus giganteus',
      isCompleted: false,
      isArchived: false,
      endDate: '8/27/2021',
      selected: false,
    },
    {
      id: 3,
      title: 'Owl, great horned',
      description: 'Bubo virginianus',
      isCompleted: false,
      isArchived: false,
      endDate: '12/14/2021',
      selected: false,
    },
    {
      id: 4,
      title: 'Ibis, puna',
      description: 'Plegadis ridgwayi',
      isCompleted: false,
      isArchived: false,
      endDate: '4/14/2022',
      selected: false,
    },
    {
      id: 5,
      title: 'Mallard',
      description: 'Anas platyrhynchos',
      isCompleted: false,
      isArchived: false,
      endDate: '11/1/2021',
      selected: false,
    },
    {
      id: 6,
      title: 'Weaver, chestnut',
      description: 'Ploceus rubiginosus',
      isCompleted: false,
      isArchived: true,
      endDate: '10/25/2021',
      selected: false,
    },
    {
      id: 7,
      title: 'Lily trotter',
      description: 'Actophilornis africanus',
      isCompleted: false,
      isArchived: true,
      endDate: '5/26/2022',
      selected: false,
    },
    {
      id: 8,
      title: 'North American porcupine',
      description: 'Erethizon dorsatum',
      isCompleted: false,
      isArchived: true,
      endDate: '12/31/2021',
      selected: false,
    },
    {
      id: 9,
      title: 'Paddy heron (unidentified)',
      description: 'unavailable',
      isCompleted: false,
      isArchived: true,
      endDate: '12/2/2021',
      selected: false,
    },
    {
      id: 10,
      title: 'Carpet python',
      description: 'Morelia spilotes variegata',
      isCompleted: false,
      isArchived: true,
      endDate: '11/7/2021',
      selected: false,
    },
  ];
  private _todoSubject: BehaviorSubject<Array<ITodo>> = new BehaviorSubject(
    this.mock
  );

  private _singleTosoSubject: BehaviorSubject<ITodo> = new BehaviorSubject(
    this.mock[0]
  );

  constructor() {}

  public getTodoes(): Observable<Array<ITodo>> {
    return this._todoSubject.asObservable();
  }
  public getSelectedTodo(): Observable<ITodo> {
    return this._singleTosoSubject.asObservable();
  }
  public setSelectedTodo(todo: ITodo) {
    this._singleTosoSubject.next(todo);
  }
}
