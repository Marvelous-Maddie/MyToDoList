import React, {useState} from "react";
import Form from "./components/Form";
import Table from "./components/Table";

import "./styles.css";

export default function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <div className="container mt-4">
        <h1 className="display-4 text-center">
          My<span className="text-success">ToDo</span>List
        </h1>
        <Form todos={todos} setTodos={setTodos} />
        <Table todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}
