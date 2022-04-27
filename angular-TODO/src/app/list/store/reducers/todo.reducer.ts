import { Action, createReducer, on } from '@ngrx/store';
import * as TodoListActions from '../actions/todo.actions';
import { TodoListState, todosAdapter } from '../states/todo.state';

export const initialState: TodoListState = todosAdapter.getInitialState({
  // additional entity state properties
});

const todoListReducer = createReducer(
  initialState,
  on(TodoListActions.loadTodos, (state, { todos }) =>
    todosAdapter.setAll(todos, state)
  ),
  on(TodoListActions.addTodo, (state, { todo }) =>
    todosAdapter.addOne(todo, state)
  ),
  on(TodoListActions.deleteTodo, (state, { id }) =>
    todosAdapter.removeOne(id, state)
  ),
  on(TodoListActions.updateTodo, (state, { newTask }) =>
    todosAdapter.updateOne(newTask, state)
  )
);

export function reducer(state: TodoListState | undefined, action: Action) {
  return todoListReducer(state, action);
}
