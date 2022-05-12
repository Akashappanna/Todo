import React from "react";

function Filters(props) {
  return (
    <div className="filters">
      <h3 className="mb-3">Filters</h3>
      <button
        className="btn mx-4"
        type="button"
        onClick={() => props.sortArray(props.todos)}
      >
        Title
      </button>
      <button
        className="btn mx-4"
        type="button"
        onClick={() => props.filtertodo("Todo")}
      >
        Todo
      </button>
      <button
        className="btn mx-4"
        type="button"
        onClick={() => props.filtertodo("In progress")}
      >
        In progress
      </button>
      <button
        className="btn mx-4"
        type="button"
        onClick={() => props.filtertodo("Done")}
      >
        Done
      </button>
    </div>
  );
}

export default Filters;
