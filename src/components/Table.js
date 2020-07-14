import React from "react";
import TableBody from "./TableBody";

const Table = ({ todos, todo, index, completeTodo, removeTodo }) => {
  return(
    <table className="table table-striped mt-5">
      <thead>
        <tr className="d-flex">
          <th className="col-9">Task</th>
          <th className="col-3"></th>
        </tr>
      </thead>
      {todos.map((todo, index) => (
        <TableBody key={index}
          index={index}
          todo={todo}
          completeTodo={completeTodo}
          removeTodo={removeTodo}/>
        ))}
    </table>
  )
}

export default Table;
