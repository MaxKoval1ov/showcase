import { createSelector } from '@ngrx/store';
import { State } from '../index';
import { TodosUIState } from '../states/todo-ui.state';
import { TodoListState, todosAdapter } from '../states/todo.state';

const selectTodos = (state: State) => state.todoList;

export const {
  selectAll: getAllTodos,
  selectTotal: getCountAllTodos,
  selectEntities: getEntitiesTodos,
} = todosAdapter.getSelectors(selectTodos);

export const getTodoItems = createSelector(
  selectTodos,
  (state: TodoListState) => state.entities
);

export const getLoadState = (state: State) => state.todoUI;

export const getIsLoading = createSelector(
  getLoadState,
  (state:TodosUIState) => state.loadingTodos
)
