import React from "react";

const Table = ({ todo, index, completeTodo, removeTodo }) => {
  return(
    <table className="table table-striped mt-5">
      <thead>
        <tr className="d-flex">
          <th className="col-9">Task</th>
          <th className="col-3"></th>
        </tr>
      </thead>
      <tbody>
        <tr className="d-flex">
          <td className="col-9">{todo.text}</td>
          <td className="col-3">
            <button className="btn btn-success">
              <i className="bi bi-check-square" onClick={() => completeTodo(index)}></i>
            </button>
            <button className="btn btn-danger">
              <i className="bi bi-trash" onClick={() => removeTodo(index)}></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default Table;
