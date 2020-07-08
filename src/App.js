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
          <i className="bi bi-list-check"></i>
          My<span className="text-success">ToDo</span>List
        </h1>
        <Form addTodo={addTodo} />
        {todos.map((todo, index) => (
          <Table key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}/>
          ))}
      </div>
    </div>
  );
}
