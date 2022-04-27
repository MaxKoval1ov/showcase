import React from "react";
import { useSelector } from "react-redux";
import ToDoForm from "./components/ToDoForm";
import ToDoItem from "./components/ToDoItem/ToDoItem";
import "./ToDo.css";

const selectTodoIds = (state) => state.toDo.map((todo) => todo._id)


function ToDoModule() {

  const todoIds = useSelector(selectTodoIds);


  return (
    <div className="todos">
      <ToDoForm></ToDoForm>
      <ul className="todo-list">
        {todoIds.map((el, index) => (
          <li key={index}>
            <ToDoItem
              id = {el}
            ></ToDoItem>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoModule;
