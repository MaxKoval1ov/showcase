import { addNew, getAllTodo, removeTodo, updateTodo } from "./actions/ToDo";
import {
  ADD_TODO,
  COMPLETE_ALL,
  DELETE_TODO,
  GET,
  REMOVE_COMPLETED,
  UPDATE_TODO,
} from "./actionsType/ToDo";

const initialState = [];

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      return [...state, action.payload];
    }
    case DELETE_TODO: {
      return state.filter((todo) => todo._id !== action.payload);
    }
    case COMPLETE_ALL: {
      return state.map((todo) => {
        return { ...todo, completed: true };
      });
    }
    case REMOVE_COMPLETED: {
      return state.filter((todo) => !todo.completed);
    }
    case UPDATE_TODO:{
        return state.map((todo) => {
            if (todo._id !== action.payload._id) {
              return todo;
            }
    
            return {
              ...todo,
              title: action.payload.title,
              completed:action.payload.completed
            };
          });
    }
    case GET: {
      return action.payload;
    }
    default:
      return state;
  }
}

const defaultUrl = "http://localhost:4000/todo";

const methods = {
  get: "GET",
  post: "POST",
  put: "PUT",
  delete: "DELETE",
};


export const getAll = async (dispatch, getState) => {
  const response = await fetch(`${defaultUrl}/?page=1&limit=10`).then((res) =>
    res.json(),
  );
  dispatch(getAllTodo(response));
};

export const deleteToDo = (id) => async (dispatch, getState) => {
  fetch(`${defaultUrl}/${id}`, {
    method: methods.delete,
  });
  dispatch(removeTodo(id));
};

export const updateToDo = (toDo) => async (dispatch, getState) => {
  fetch(`${defaultUrl}/${toDo._id}`, {
    method: methods.put,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(toDo),
  });
  dispatch(updateTodo(toDo));
};

export const createToDo = (toDo) => async (dispatch, getState) => {
   await fetch(defaultUrl, {
    method: methods.post,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(toDo),
  });
  dispatch(addNew(toDo));
};
