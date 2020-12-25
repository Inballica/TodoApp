import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import TodoContext from "../../../../context/TodoContext/TodoContext";
const Filters = () => {
  const location = useLocation();
  const todocontext = useContext(TodoContext);
  return (
    <div>
      <ul className='filters'>
        <li>
          <Link to='/' className={location.pathname === "/" ? "selected" : ""}>
            {" "}
            All
          </Link>
        </li>
        <li>
          <Link
            to='/update'
            className={location.pathname === "/update" ? "selected" : ""}
          >
            {" "}
            Update
          </Link>
        </li>
        <li>
          <Link
            to='/active'
            className={location.pathname === "/active" ? "selected" : ""}
          >
            Active
          </Link>
        </li>
        <li>
          <Link
            to='/completed'
            className={location.pathname === "/completed" ? "selected" : ""}
          >
            Completed
          </Link>
        </li>
      </ul>
      <button
        onClick={() => {
          todocontext.deleteCompleteTodo();
        }}
        className='clear-completed'
      >
        Clear completed
      </button>
    </div>
  );
};

export default Filters;
