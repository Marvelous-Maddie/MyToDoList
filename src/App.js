import React from "react";
import Form from "./components/Form";
import Table from "./components/Table";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="container mt-4">
        <h1 className="display-4 text-center">
          <i className="bi bi-list-check"></i>
          My<span className="text-success">ToDo</span>List
        </h1>
        <Form />
        <Table />
      </div>
    </div>
  );
}
