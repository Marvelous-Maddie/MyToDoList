import React from "react";

const Form = () => {
  return(
    <form>
      <div className="form-group">
        <input type="text" className="form-control" placeholder="My next task"></input>
      </div>
      <input type="submit" value="Add Task" className="btn btn-success btn-block"></input>
    </form>
  )
}

export default Form;
