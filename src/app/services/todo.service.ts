import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ITodo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private mock: ITodo[] = [
    { "title": "Fox, asian red", "description": "Vulpes vulpes", "isCompleted": false, "isArchived": true, "endDate": "7/17/2021" },
{ "title": "Gazer, sun", "description": "Cordylus giganteus", "isCompleted": true, "isArchived": true, "endDate": "8/27/2021" },
{ "title": "Owl, great horned", "description": "Bubo virginianus", "isCompleted": false, "isArchived": true, "endDate": "12/14/2021" },
{ "title": "Ibis, puna", "description": "Plegadis ridgwayi", "isCompleted": true, "isArchived": true, "endDate": "4/14/2022" },
{ "title": "Mallard", "description": "Anas platyrhynchos", "isCompleted": false, "isArchived": true, "endDate": "11/1/2021" },
{ "title": "Weaver, chestnut", "description": "Ploceus rubiginosus", "isCompleted": true, "isArchived": true, "endDate": "10/25/2021" },
{ "title": "Lily trotter", "description": "Actophilornis africanus", "isCompleted": true, "isArchived": false, "endDate": "5/26/2022" },
{ "title": "North American porcupine", "description": "Erethizon dorsatum", "isCompleted": false, "isArchived": false, "endDate": "12/31/2021" },
{ "title": "Paddy heron (unidentified)", "description": "unavailable", "isCompleted": true, "isArchived": true, "endDate": "12/2/2021" },
{ "title": "Carpet python", "description": "Morelia spilotes variegata", "isCompleted": false, "isArchived": false, "endDate": "11/7/2021" },
  ]
  private _todoSubject: BehaviorSubject<Array<ITodo>>= new BehaviorSubject(this.mock)

  constructor() { }

  public getTodoes():Observable<Array<ITodo>> {
    return this._todoSubject.asObservable();
  }
}
