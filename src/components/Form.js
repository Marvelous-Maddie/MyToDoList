import React, {useState, useEffect} from "react";

const Form = ({ todos, setTodos }) => {
  const [value, setValue] = useState("");

  useEffect(() => localStorage.setItem('todos', JSON.stringify(todos)), [todos]);

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
    console.log(newTodos)
  };

  return(
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input type="text" className="form-control" placeholder="My next task" onChange={e => setValue(e.target.value)}></input>
      </div>
      <input type="submit" value="Add Task" className="btn btn-success btn-block"></input>
    </form>
  )
}

export default Form;
