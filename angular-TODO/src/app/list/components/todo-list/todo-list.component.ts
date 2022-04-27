import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, Observable, pipe } from 'rxjs';
import { Task } from 'src/app/models/task';
import { RequestService } from 'src/app/services/request.service';
import { loadTodosRequest } from '../../store/actions/todo-ui.actions';
import { loadTodos } from '../../store/actions/todo.actions';
import { State } from '../../store/index'
import { getAllTodos, getEntitiesTodos, getIsLoading, getLoadState, getTodoItems } from '../../store/selectors/todo.selectors';
import { TodosUIState } from '../../store/states/todo-ui.state';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent implements OnInit {
  tasks$!: Observable<Task[]>;
  currentNum!: number;
  sortingBy: string = 'id';
  isDesc = false;
  isLoading$!: Observable<boolean>;

  constructor(private store: Store<State>) {
      }


  ngOnInit(): void {
    // this.getData();
    this.store.dispatch(loadTodosRequest());
    this.tasks$ = this.store.pipe(
      select(getAllTodos),
    )
    this.isLoading$ = this.store.pipe(
      select(getIsLoading)
    )
  }
  

  toggleDesc() {
    this.isDesc = !this.isDesc;
  }
}
