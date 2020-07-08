import React, {useState} from "react";

const Form = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
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
