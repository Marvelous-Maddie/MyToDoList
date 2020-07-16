import React, {useEffect} from "react";
import TableBody from "./TableBody";

const Table = ({ todos, setTodos }) => {
  useEffect(() => {
    if (localStorage.getItem('todos') === null) {
      setTodos([]);
    } else {
      setTodos(JSON.parse(localStorage.getItem('todos')));
    }
    console.log({todos});
  }, []);

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

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
