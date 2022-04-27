import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { Task } from 'src/app/models/task';

export const loadTodosRequest = createAction('[TodoModule] LoadTodosRequest');

export const loadTodosSuccess = createAction('[TodoModule] LoadTodosSuccess');

export const loadTodosFail = createAction(
  '[TodoModule] LoadTodosFail',
  props<{ error: string }>()
);

export const addTodoRequest = createAction(
  '[TodoModule] addTodosRequest',
  props<{ todo: Task }>()
);

export const addTodoSuccess = createAction('[TodoModule] AddTodoSuccess');

export const addTodoFail = createAction(
  '[TodoModule] AddTodoFail',
  props<{ error: string }>()
);

export const updateTodoRequest = createAction(
  '[TodoModule] UpdateTodosRequest',
  props<{ newTask: Update<Task> }>()
);
export const updateTodoSuccess = createAction(
  '[TodoModule] UpdateTodosSuccess'
);
export const updateTodoFail = createAction(
  '[TodoModule] UpdateTodosFail',
  props<{ error: string }>()
);

export const deleteTodoRequest = createAction(
  '[TodoModule] deleteTodosRequest',
  props<{ id: string }>()
);
export const deleteTodoSuccess = createAction(
  '[TodoModule] deleteTodosSuccess'
);
export const deleteTodoFail = createAction(
  '[TodoModule] deleteTodosFail',
  props<{ error: string }>()
);
