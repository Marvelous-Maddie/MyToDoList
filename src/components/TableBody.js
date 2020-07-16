import React from "react";

const TableBody = ({ todo, index, completeTodo, removeTodo }) => {
  return(
      <tbody>
        <tr className="d-flex">
          <td className="col-9" style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>{todo.text}</td>
          <td className="col-3">
            <button className="btn btn-success" onClick={() => completeTodo(index)}>
              <i className={`fas fa-${todo.isCompleted ? 'redo' : 'check'}`}></i>
            </button>
            <button className="btn btn-danger" onClick={() => removeTodo(index)}>
              <i className="fas fa-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
  )
}

export default TableBody;
