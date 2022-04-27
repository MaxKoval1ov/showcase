import { ADD_TODO, CHANGE_TITLE, COMPLETE_ALL, DELETE_TODO, GET, REMOVE_COMPLETED, SET_ERROR, SET_LOADING, SET_SUCCESS, TOGGLE_COMPLETE, UPDATE_TODO } from "../actionsType/ToDo";


export const loadingStart = () => ({
    type:SET_LOADING,
})

export const loadingFail = () => ({
    type:SET_ERROR,
})

export const loadingSuccess = () => ({
    type:SET_SUCCESS,
})

export const removeAllCompleted = () => ({
    type: REMOVE_COMPLETED
})

export const getAllTodo = (toDos) => ({
    type: GET,
    payload:toDos
})

export const addNew = (task) => ({
  type: ADD_TODO,
  payload: task,
});

export const completeAll = () => ({
    type:COMPLETE_ALL
})


export const removeTodo = (id) => ({
    type:DELETE_TODO,
    payload: id,
})

export const updateTodo = (task) => ({
    type:UPDATE_TODO,
    payload:task
})

export const todoToggle = (id) => ({
    type:TOGGLE_COMPLETE,
    payload:id
})

export const newTitle = (title) => ({
    type:CHANGE_TITLE,
    payload:title
})