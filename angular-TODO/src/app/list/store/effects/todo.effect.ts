import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, mergeMap, of, switchMap } from 'rxjs';
import { RequestService } from 'src/app/services/request.service';

import {
  addTodoFail,
  addTodoRequest,
  addTodoSuccess,
  deleteTodoFail,
  deleteTodoRequest,
  deleteTodoSuccess,
  loadTodosFail,
  loadTodosRequest,
  loadTodosSuccess,
  updateTodoFail,
  updateTodoRequest,
  updateTodoSuccess,
} from '../actions/todo-ui.actions';
import { addTodo, deleteTodo, loadTodos, updateTodo } from '../actions/todo.actions';

@Injectable()
export class TodoEffect {
  constructor(
    private actions$: Actions,
    private todosService: RequestService
  ) {}

  loadTodosrequest$ = createEffect(() =>
  this.actions$.pipe(
    ofType(loadTodosRequest),
    switchMap(() => {
      return this.todosService.getData().pipe(
        mergeMap((todos) => [ loadTodos({todos}),loadTodosSuccess()]),
        catchError((error) => of(loadTodosFail({ error })))
      );
    })
  )
);

  addTodoRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addTodoRequest),
      switchMap((action) => {
        return this.todosService.createTask(action.todo).pipe(
          mergeMap((newTodo) => [addTodo({ todo: newTodo }), addTodoSuccess()]),
          catchError((error) => of(addTodoFail({ error })))
        );
      })
    )
  );

  removeTodoRequest$ = createEffect(() => 
      this.actions$.pipe(
        ofType(deleteTodoRequest),
        switchMap((action) => {
          return this.todosService.removeItem(action.id).pipe(
            mergeMap((state) => [
              deleteTodo({id:state._id}),
              deleteTodoSuccess(),
            ]),
            catchError(error => of (deleteTodoFail({error})))
          )
        })
      )
  )

  updateTodoRequest$ = createEffect(() => 
      this.actions$.pipe(
        ofType(updateTodoRequest),
        switchMap((action) => {
          return this.todosService.updateTask(action.newTask).pipe(
            mergeMap(() => [
              updateTodo({newTask: action.newTask}),
              updateTodoSuccess(),
            ]),
            catchError(error => of (updateTodoFail({error})))
          )
        })
      )
  )
}
