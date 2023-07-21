import logo from './logo.svg';
import TodoListBlock from './components/todoListBlock'
import './App.css';
import React from "react";

function App() {
  return (
    <div>
        <h1 className="title">
            Add new rows and then edit them
        </h1>
     <TodoListBlock/>
    </div>
  );
}

export default App;
