import "../styles/styles.css";
import { Draggable, Droppable } from "react-beautiful-dnd";

import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { BsFillEyeFill } from "react-icons/bs";
import { BsFillSkipStartCircleFill } from "react-icons/bs";
import { MdOutlineEditOff } from "react-icons/md";

export default function Drag(props) {
  const { todos, completodo, removetodo, viewtodo, updatestate } = props;
  const [edit, setEdit] = useState({
    id: null,
    text: "",
    des: "",
    state: "",
    userid: null,
  });

  const [input, setInput] = useState(edit ? edit.text : "");
  const [descrp, setDescrp] = useState(edit ? edit.des : "");

  const handlesubmit = (e) => {
    e.preventDefault();
    props.onSubmit(todos, {
      id: edit.id,
      text: input,
      des: descrp,
      state: edit.state,
      userid: edit.userid,
    });

    setEdit({
      id: null,
      text: "",
      des: "",
      state: "",
      userid: null,
    });
    setInput("");
    setDescrp("");
    console.log("updated");
  };

  const handlecloseedit = (e) => {
    e.preventDefault();
    props.onSubmit(todos, {
      id: edit.id,
      text: edit.text,
      des: edit.des,
      state: edit.state,
      userid: edit.userid,
    });

    setEdit({
      id: null,
      text: "",
      des: "",
      state: "",
      userid: null,
    });
    setInput("");
    setDescrp("");
    console.log("updated");
  };
  return (
    <Droppable droppableId="droppable-1">
      {(provided) => (
        <div
          className="todo-main mt-4"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {todos?.map((todo, index) =>
            edit.id === todo.id ? (
              <div className="edit view">
                <div className="edit-icon-main">
                  {edit.isicon ? (
                    <TiEdit
                      onClick={() => (
                        setEdit({
                          id: todo.id,
                          text: todo.title,
                          des: todo.descrp,
                          state: todo.state,
                          userid: todo.userid,
                        }),
                        setInput(todo.title),
                        setDescrp(todo.descrp)
                      )}
                      className="edit-icon"
                    />
                  ) : (
                    <MdOutlineEditOff
                      onClick={handlecloseedit}
                      className="cancel-edit-icon mx-4"
                    />
                  )}
                </div>
                <form className="edit-todo" onSubmit={handlesubmit}>
                  <label>Title</label>
                  <input
                    type="text"
                    name="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                  />
                  <label>Description</label>
                  <textarea
                    type="text"
                    name="descrp"
                    value={descrp}
                    placeholder="Enter the description"
                    onChange={(e) => setDescrp(e.target.value)}
                  />
                  <input type="submit" value="update" />
                </form>
              </div>
            ) : (
              <Draggable
                key={todo.id}
                draggableId={todo.id.toString()}
                index={index}
              >
                {(provided, snapshot) => {
                  return (
                    <div
                      {...provided.draggableProps}
                      ref={provided.innerRef}
                      className={todo.isview ? "todo-row view" : "todo-row"}
                      key={index}
                      style={{
                        width: snapshot.isDragging ? "10%" : "100%",
                        backgroundColor: snapshot.isDragging ? "" : "initial",
                        color: snapshot.isDragging ? "" : "initial",
                        boxShadow: snapshot.isDragging
                          ? "0px 0px 10px 5px black"
                          : "none",
                        justifyContent: snapshot.isDragging
                          ? "space-around"
                          : "none",
                        fontSize: 18,
                        ...provided.draggableProps.style,
                      }}
                    >
                      <div className="todo-fun-container">
                        <div {...provided.dragHandleProps}> = </div>
                        <div
                          className={todo.iscomplete ? "complete" : ""}
                          onClick={() => completodo(todo.id, todo.state)}
                          style={{ textTransform: "capitalize" }}
                        >
                          {todo.title}
                        </div>
                        <div
                          className={
                            todo.iscomplete
                              ? "todo-text3 todo-state"
                              : "todo-text3"
                          }
                          id="state"
                          key={todo.id}
                          onClick={() => completodo(todo.id, todo.state)}
                        >
                          State : <span>{todo.state}</span>
                        </div>
                        <div className="icons">
                          <BsFillSkipStartCircleFill
                            onClick={() => updatestate(todo.id, todo.state)}
                            className={
                              todo.state === "In progress" ? "state-color" : ""
                            }
                          />
                          <BsFillEyeFill
                            onClick={() => viewtodo(todo.id)}
                            className={
                              todo.isview ? "edit-icon edit-color" : "edit-icon"
                            }
                          />
                          <TiEdit
                            onClick={() => (
                              setEdit({
                                id: todo.id,
                                text: todo.title,
                                des: todo.descrp,
                                state: todo.state,
                                userid: todo.userid,
                              }),
                              setInput(todo.title),
                              setDescrp(todo.descrp),
                              `${todo.isview ? "" : viewtodo(todo.id)}`
                            )}
                            className="edit-icon"
                          />
                          <RiCloseCircleLine
                            onClick={() => removetodo(todo.id)}
                            className="remove-icon"
                          />
                        </div>
                      </div>
                      <div
                        className={
                          todo.iscomplete
                            ? "todo-text-section complete"
                            : "todo-text-section"
                        }
                        key={index}
                      >
                        <div
                          key={todo.id}
                          onClick={() => completodo(todo.id, todo.state)}
                          className="todo-text"
                        >
                          <div className="todo-text2">
                            User ID : {todo.userid}
                          </div>
                          <div className="todo-text2">ID : {todo.id}</div>
                          <div className="todo-text2">
                            Descrptions : {todo.descrp}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }}
              </Draggable>
            )
          )}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}
