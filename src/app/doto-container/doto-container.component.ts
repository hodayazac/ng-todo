import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { NewTodoComponent } from '../components/new-todo/new-todo.component';
import { ITodo } from '../models/todo.interface';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-doto-container',
  templateUrl: './doto-container.component.html',
  styleUrls: ['./doto-container.component.scss'],
})
export class DotoContainerComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  public todo: ITodo;
  public todos: ITodo[];

  constructor(public dialog: MatDialog, private todoService: TodoService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.todoService.getSelectedTodo().subscribe((data) => {
        this.todo = data;
      })
    );
    this.todoService.getTodoes().subscribe((data) => {
      this.todos = data;
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(NewTodoComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
