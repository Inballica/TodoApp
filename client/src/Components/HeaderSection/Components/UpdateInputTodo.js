import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import TodoContext from "../../../context/TodoContext/TodoContext";

const InputTodos = () => {
  const params = useParams();
  const todocontext = useContext(TodoContext);
  useEffect(() => {
    todocontext.getForUpdate(params.id);
  }, []);
  const [todoInput, settodoInput] = useState(todocontext.todoForUpdate);
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
