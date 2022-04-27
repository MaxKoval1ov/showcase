import { ActionReducerMap, createFeatureSelector, MetaReducer } from "@ngrx/store";
import { environment } from "src/environments/environment";
import { todosUIReducer } from "./reducers/todo-ui.reducer";
import { reducer } from "./reducers/todo.reducer";
import { TodosUIState } from "./states/todo-ui.state";
import { TodoListState } from "./states/todo.state";

export interface State {
    todoList: TodoListState
    todoUI: TodosUIState
}

export const reducers: ActionReducerMap<State> = {
    todoList:reducer,
    todoUI:todosUIReducer
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
  