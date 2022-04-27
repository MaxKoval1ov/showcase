import React from "react";
import { useDispatch } from "react-redux";
import { createToDo } from "../ToDoSlice";
import './ToDoForm.css'

let count = 0;


export default function ToDoForm({ addTodo }) {
  const [value, setValue] = React.useState("");

  const dispatch = useDispatch()

  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(createToDo({title:value, userId:++count, completed:false}));
  }

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <input
        type="text"
        value={value}
        placeholder="Add new todo"
        onChange={(e) => setValue(e.target.value)}
        className = "add-input"
      ></input>
      <button type="submit" className="std_btn">Add</button>
    </form>
  );
}
