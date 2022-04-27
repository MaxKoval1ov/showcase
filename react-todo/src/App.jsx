import React from "react";
import logo from "./logo.svg";
import ToDoModule from "./modules/ToDoModule/ToDoModule";

import "./App.css";



function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <ToDoModule></ToDoModule>
      
     </div>
  );
}

export default App;
