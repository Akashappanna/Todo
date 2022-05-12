import React, { useState } from "react";
import Todoform from "./Todoform";
import Filters from "./Filters";
import Footer from "./Footer";
import Drag from "./drag";
import { DragDropContext } from "react-beautiful-dnd";

function Todolist({ user, logout }) {
  const [todos, setTodos] = useState([]);
  const [data, setData] = useState([]);

  const addtodo = (todo) => {
    if (!todo || /^\s*$/.test(todo.title)) {
      alert("The title cannot be empty");
      return;
    }
    const newtodo = [todo, ...todos];
    setTodos(newtodo);
    setData(newtodo);
  };

  const updatetodo = (todos, edit) => {
    if (!edit || /^\s*$/.test(edit.text)) {
      alert("The title cannot be empty");
      return;
    }

    let edittodos = todos.map((todo) => {
      if (todo.id === edit.id) {
        todo.title = edit.text;
        todo.descrp = edit.des;
      }
      return todo;
    });

    setTodos(edittodos);
    console.log(todos);
    console.log(edit);
    console.log("update");
  };

  const removetodo = (id) => {
    const removearr = [...todos].filter((todo) => id !== todo.id);
    setTodos(removearr);
    setData(removearr);
  };
  const completodo = (id, text) => {
    let updatedtodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.iscomplete = !todo.iscomplete;
        if (todo.iscomplete && (text === "In progress" || text === "Todo")) {
          todo.state = "Done";
        } else {
          todo.state = "Todo";
        }
      }
      return todo;
    });

    setTodos(updatedtodos);
  };

  const viewtodo = (id) => {
    let updatedtodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.isview = !todo.isview;
      }
      return todo;
    });

    setTodos(updatedtodo);
  };

  const updatestate = (id, text) => {
    let updatedstate = todos.map((todo) => {
      if (!todo.iscomplete && text === "Todo" && todo.id === id) {
        todo.state = "In progress";
      } else if (!todo.iscomplete && text === "In progress" && todo.id === id) {
        todo.state = "Todo";
      } else if (todo.iscomplete && todo.id === id) {
        todo.state = "Done";
      }
      return todo;
    });

    setTodos(updatedstate);
  };

  const handleDragEnd = (e) => {
    if (!e.destination) return;
    let tempData = Array.from(todos);
    let [source_data] = tempData.splice(e.source.index, 1);
    tempData.splice(e.destination.index, 0, source_data);
    setTodos(tempData);
  };

  const filtertodo = (text) => {
    const filterarr = [...data].filter((todo) => text === todo.state);
    if (filterarr && filterarr.length) {
      setTodos(filterarr);
    }
  };
  const clearfilter = (data) => {
    setTodos(data);
  };

  const sortArray = (todos) => {
    let sorttitle = todos.map((todo) => {
      const sorted = [todo.title, todo.id];
      return sorted;
    });
    let sortsub = sorttitle.map((text) => {
      const sortadd = text[0] + text[1];
      return sortadd;
    });
    const newdata = sortsub.sort((a, b) => a.localeCompare(b));
    const fl = newdata.map((text) => {
      const filterarr = [...todos].filter(
        (todo) => todo.title + todo.id === text
      );
      return filterarr[0];
    });
    setTodos(fl);
  };
  return (
    <>
      <div
        className="container main"
        style={{ height: todos.length ? "100%" : "" }}
      >
        <div style={{ textAlign: "end" }}>
          <h5 style={{ textTransform: "capitalize" }}>
            {" "}
            Welcome {user.name} 😃
          </h5>
          <button type="button" className="btn btn-danger" onClick={logout}>
            Logout
          </button>
        </div>
        <h3> What's your plan for the day ? </h3>
        <Todoform onSubmit={addtodo} user={user} />
        {todos.length ? (
          <>
            <Filters
              filtertodo={filtertodo}
              sortArray={sortArray}
              todos={todos}
            />
            <button
              className="btn m-4"
              id="clear"
              type="button"
              onClick={() => clearfilter(data)}
            >
              Clear filter
            </button>
          </>
        ) : (
          ""
        )}
        <DragDropContext onDragEnd={handleDragEnd}>
          <div
            className={todos.length ? "container todo-bg" : "container"}
            id="todo"
          >
            <Drag
              onSubmit={updatetodo}
              todos={todos}
              completodo={completodo}
              removetodo={removetodo}
              updatetodo={updatetodo}
              viewtodo={viewtodo}
              updatestate={updatestate}
              handleDragEnd={handleDragEnd}
            />
          </div>
        </DragDropContext>
      </div>
      <Footer />
    </>
  );
}
export default Todolist;
