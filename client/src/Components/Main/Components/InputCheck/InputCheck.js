/*import React, { useContext } from "react";
import TodoContext from "../../../../context/TodoContext/TodoContext";

const InputCheck = () => {
  const todocontext = useContext(TodoContext);
  return (
    <div>
      <input
        style={{ cursor: "pointer" }}
        onClick={() => {
          todocontext.updateAllComplete();
        }}
        checked={
          todocontext.activeTodo && todocontext.activeTodo.length === 0 && true
        }
        className='toggle'
        type='checkbox'
      />
      <label className="select-all">Select all</label>
    </div>
  );
};

export default ; 
 */