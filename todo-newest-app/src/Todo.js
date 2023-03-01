import React from "react";
import { useState, useEffect } from "react";
import { FiEdit } from "react-icons/fi";
import { FiDelete } from "react-icons/fi";
import { ImCheckboxUnchecked } from "react-icons/im";


const Todo = () => {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editing, setEditing] = useState(false);
  const [selectedElement, setSelectedElement] = useState();
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  const handleSubmit = () => {
    const updatedTodoList = [...todoList];
    if (editing === false) {
      setTodoList([...todoList, input]);
      setInput("");
      return;
    } else updatedTodoList.splice(selectedElement, 1, input);
    setTodoList(updatedTodoList);
    setEditing(false);
    setInput('')
  };

  const handleDelete = (item) => {
    console.log(item);
    const newTodo = todoList.filter((value) => value !== todoList[item]);
    console.log(newTodo);
    setTodoList(newTodo);
  };

  const handleEdit = (index) => {
    setEditing(true);
    setInput(todoList[index]);
    setSelectedElement(index);
  };

  const checkedHandler = () => {
    setChecked((prev) => !prev);
  };

  console.log(input);
  console.log(selectedElement);
  console.log(todoList);
  console.log(editing);

  console.log(todoList);
  console.log(checked);
  return (
    <div className="todo-container">
      <h1>Enter your new todo</h1>
      <div className="input-container">
        <input
          value={input}
          className={editing ? "editing-todo" : "todo-input"}
          onChange={handleChange}
        ></input>
        <button className="todo-button" onClick={handleSubmit}>
          {editing ? "Update" : "Submit"}
        </button>
      </div>
      {todoList.map((todo, index) => {
        return (
          <div className="todo-list-container">
            <li className={checked ? "checked" : "not-checked"}>{todo}</li>
            <div className="buttons-container">
              <input className="checkbox" type="checkbox" onChange={checkedHandler}></input>
              <FiDelete
                className="delete-button"
                onClick={() => handleDelete(index)}
              >
                Delete
              </FiDelete>
              <FiEdit className="edit-button" onClick={() => handleEdit(index)}>
                Edit
              </FiEdit>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Todo;
