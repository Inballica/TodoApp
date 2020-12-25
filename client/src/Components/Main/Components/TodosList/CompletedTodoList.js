import React, { useContext, useEffect } from "react";
import "./TodosList.css";

import TodoContext from "../../../../context/TodoContext/TodoContext";

const CompletedTodoList = () => {
  
  const todocontext = useContext(TodoContext);
  useEffect(() => {
    todocontext.getTodoList();
  }, []);

  return (
    <div>
      <ul className='todo-list'>
        {todocontext.completedTodo &&
          todocontext.completedTodo.length > 0 &&
          todocontext.completedTodo.map(t => (
            <li className={t.completed && "completed"}>
              <div className='view'>
                <input
                  className='toggle'
                  type='checkbox'
                  onClick={() => {
                    let le = t.completed;
                    todocontext.updateTodoCompleted(t._id, !le);
                  }}
                  checked={t.completed}
                />
                <label>{t.todo}</label>
                <button
                  onClick={() => {
                    console.log("running");
                    todocontext.deleteTodo(t._id);
                  }}
                  className='destroy'
                ></button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CompletedTodoList;
