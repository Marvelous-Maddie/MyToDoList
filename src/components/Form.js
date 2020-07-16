import React, {useState, useEffect} from "react";

const Form = ({ todos, setTodos }) => {
  const [todoInputValue, setTodoInputValue] = useState("");
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    if (pageLoaded) {
     localStorage.setItem('todos', JSON.stringify(todos));
   } else {
     setPageLoaded(true);
   }},
  [todos,pageLoaded]
)

  const handleChange = e => {
    const newTodo = e.target.value;
    setTodoInputValue(newTodo);
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (!todoInputValue) return;
    addTodo(todoInputValue);
    setTodoInputValue("");
  };

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
    console.log(newTodos)
  };

  return(
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input value={todoInputValue} type="text" className="form-control" placeholder="My next task" onChange={handleChange}></input>
      </div>
      <input type="submit" value="Add Task" className="btn btn-success btn-block"></input>
    </form>
  )
}

export default Form;
