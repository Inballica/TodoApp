import React, { useContext } from "react";
import TodoContext from "../../../../context/TodoContext/TodoContext";

const TotalTodos = () => {
  const todocontext = useContext(TodoContext);
  return (
    <div>
      <span className='todo-count'>
        {todocontext.activeTodo && todocontext.activeTodo.length} items Left
      </span>
    </div>
  );
};
export default TotalTodos;
