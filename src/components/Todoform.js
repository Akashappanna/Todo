import React, { useState } from "react";

function Todoform(props) {
  const [input, setInput] = useState("");
  const [descrp, setDescrp] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      title: input,
      descrp: descrp,
      state: "Todo",
      userid: props.user.id,
    });
    setInput("");
    setDescrp("");
  };

  return (
    <div className="container" id="form-todo">
      <form className="todo-form my-4" onSubmit={handlesubmit}>
        <input
          className="col-md-6"
          type="text"
          name="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a todo"
        />
        <textarea
          className="col-md-6"
          type="text"
          name="descrp"
          value={descrp}
          onChange={(e) => setDescrp(e.target.value)}
          placeholder="Descriptions...    e.x. 'The fruits are good' "
        />
        <input className="col-md-3 mx-3" type="submit" value="Add" />
      </form>
    </div>
  );
}

export default Todoform;
