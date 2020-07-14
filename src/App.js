import React, {useState} from "react";
import Form from "./components/Form";
import Table from "./components/Table";

import "./styles.css";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <div className="container mt-4">
        <h1 className="display-4 text-center">
          My<span className="text-success">ToDo</span>List
        </h1>
        <Form addTodo={addTodo} />
        <Table
          todos={todos}
          completeTodo={completeTodo}
          removeTodo={removeTodo} />
      </div>
    </div>
  );
}
