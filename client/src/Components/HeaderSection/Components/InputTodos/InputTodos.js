import React, { useState, useContext } from "react";
import TodoContext from "../../../../context/TodoContext/TodoContext";

const InputTodos = () => {
  const todocontext = useContext(TodoContext);
  const [todoInput, settodoInput] = useState({
    todo: "",
    completed: false,
  });
  const inputHandler = e => {
    let data = { ...todoInput };
    data.todo = e.target.value;
    settodoInput(data);
  };
  const onSubmit = async e => {
    e.preventDefault();
    await todocontext.addTodo(todoInput);
    settodoInput({
      todo: "",
      completed: false,
    });
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={inputHandler}
          className='new-todo'
          value={todoInput.todo}
          placeholder='What needs to be done?'
          autofocus
        />
      </form>
    </div>
  );
};

export default InputTodos;
