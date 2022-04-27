import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { Task } from 'src/app/models/task';

export const addTodo = createAction(
  '[TodoModule] addTodo',
  props<{ todo: Task }>()
);

export const updateTodo = createAction(
  '[TodoModule] updateTodo',
  props<{newTask:Update<Task>}>()
);

export const deleteTodo = createAction(
  '[TodoModule] deleteTodo',
  props<{ id: string }>()
);

export const changeCompletedStatus = createAction(
  '[Todo list] Change status of the item',
  props<{ id: string; completed: boolean }>()
);

export const loadTodos = createAction(
  '[TodoModule] LoadTodos',
  props<{ todos: Task[] }>()
);
