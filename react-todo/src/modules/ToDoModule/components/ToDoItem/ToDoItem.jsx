import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { deleteToDo, updateToDo } from "../../ToDoSlice";
import "./ToDoItem.css";

const selectTodoById = (state, todoId) => {
  return state.toDo.find((todo) => todo._id === todoId)
}


export default function ToDoItem({id}) {

  const todo = useSelector((state) => selectTodoById(state, id));
  const [isEditMode, toggleMode] = useState(false);
  const [value, setValue] = useState(todo.title);

  const dispatch = useDispatch();

  const toggleEditMode = () => {
    toggleMode(!isEditMode);
  };

  const saveChanges = () => {
    toggleMode(!isEditMode);
    dispatch(updateToDo({
      ...todo,
        title:value,
    }))
  };

  const toggleCompleted =() => {
     dispatch(updateToDo({
       ...todo,
       completed:!todo.completed
     }))
  }

  const deleteCur = () => {
    dispatch(deleteToDo(todo._id));
  }

  return (
    <div className="todo-item">
      <div className="userId">{todo.userId}</div>
      {isEditMode ? (
        <input
          type="text"
          value={value || ""}
          placeholder="Change To-Do"
          onChange={(e) => setValue(e.target.value)}
        ></input>
      ) : (
        <strong>{value}</strong>
      )}
      <input
        type="checkbox"
        defaultChecked={todo.completed}
        onChange={ () => toggleCompleted(todo.userId) }
      ></input>
      {isEditMode ? (
        <button onClick={saveChanges}>Save</button>
      ) : (
        <button onClick={toggleEditMode}>Edit</button>
      )}
      <button onClick={deleteCur}>Delete</button>
    </div>
  );
}
