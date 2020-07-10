import React from "react";

const Table = ({ todo, index, completeTodo, removeTodo }) => {
  return(
    <table className="table table-striped mt-5">
      <thead>
        <tr>
          <th>Task</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{todo.text}</td>
          <td>
            <button>
              <i className="bi bi-check-square" onClick={() => completeTodo(index)}></i>
            </button>
            <button>
              <i className="bi bi-trash" onClick={() => removeTodo(index)}></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default Table;
