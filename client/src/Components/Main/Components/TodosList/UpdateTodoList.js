import React, { useContext, useEffect, useState } from "react";
import TodoContext from "../../../../context/TodoContext/TodoContext";
import "./TodosList.css";

const TodosList = () => {
  const [text, settext] = useState([]);
  const todocontext = useContext(TodoContext);
  useEffect(() => {
    todocontext.getTodoList();
  }, []);

  useEffect(() => {
    if (todocontext.todo && todocontext.todo.length > 0) {
      settext(
        Array(todocontext.todo.length)
          .fill()
          .map((v, i) => null)
      );
    }
  }, [todocontext.todo]);
  return (
    <div>
      <ul className='todo-list'>
        {todocontext.todo.length > 0 &&
          todocontext.todo.map((t, i) => (
            <li className={t.completed && "completed "}>
              <input
                defaultValue={t.todo}
                className='new-todo'
                type='text'
                value={text[i]}
                onChange={e => {
                  let data = [...text];
                  data[i] = e.target.value;
                  settext(data);
                }}
              />
              <button
                onClick={() => {
                  todocontext.updateTodo(t._id, text[i]);
                }}
                className='edit'
              >edit</button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TodosList;
