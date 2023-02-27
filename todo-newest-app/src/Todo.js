import React from "react";
import { useState, useEffect } from "react";
const Todo = () => {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  const handleSubmit = () => {
    setTodoList([...todoList, input]);
    setInput("");
  };

  const handleDelete = (item) => {
    console.log(item);
    const newTodo = todoList.filter((value) => value !== todoList[item]);
    console.log(newTodo);
    setTodoList(newTodo);
  };

  const handleEdit = () => {};

  console.log(todoList);
  return (
    <div className="todo-container">
      <input className="todo-input" onChange={handleChange}></input>
      <button className="todo-button" onClick={handleSubmit}>
        Submit
      </button>
      {todoList.map((todo, index) => {
        return (
          <>
            <li>{todo}</li>
            <button
              className="delete-button"
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
            <button className="edit-button" onClick={handleEdit}>
              Edit
            </button>
          </>
        );
      })}
    </div>
  );
};

export default Todo;
