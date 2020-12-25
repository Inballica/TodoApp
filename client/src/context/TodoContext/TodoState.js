import React, { useReducer } from "react";
import TodoContext from "./TodoContext";
import TodoReducer from "./TodoReducer";
import { toast } from "react-toastify";
import axios from "axios";
import { TODO_COMPELTE, GET_TODO } from "./types";
const TodoState = props => {
  const initialState = {
    todo: [],
    activeTodo: [],
    completeTodo: [],
  };
  const [state, dispatch] = useReducer(TodoReducer, initialState);
  // Add Todo List
  const addTodo = async todowork => {
    const { todo, completed } = todowork;
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ todo, completed });
    try {
      await axios.post("/api/todo/add", body, config);
      getTodoList();
    } catch (error) {
      console.log(error);
    }
  };
  //get TODO List
  const getTodoList = async () => {
    try {
      const res = await axios.get("/api/todo");
      dispatch({
        type: GET_TODO,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  //delete Todo
  const deleteTodo = async id => {
    try {
      await axios.delete(`/api/todo/delete/${id}`);
      getTodoList();
    } catch (error) {
      console.log(error);
    }
  };
  //Completed Update List
  const updateTodoCompleted = async (id, updateValue) => {
    console.log(updateValue);
    try {
      await axios.patch(`/api/todo/completed/${id}`, { updateValue });
      getTodoList();
    } catch (error) {
      console.log(error);
    }
  };
  //DeleteComplete Todos
  const deleteCompleteTodo = async () => {
    try {
      await axios.delete(`/api/todo/deletecompleted/`);
      getTodoList();
    } catch (error) {
      console.log(error);
    }
  };
  // Update todo List
  const updateTodo = async (id, updateValue) => {
    console.log(updateValue);
    try {
      await axios.post(`/api/todo/updatetodo/${id}`, { updateValue });
      getTodoList();
      toast.success("Successfully updated");
    } catch (error) {
      console.log(error);
    }
  };
  //Update all completed tasks
  const updateAllComplete = async () => {
    try {
      await axios.post(`/api/todo/allcomplete`);
      getTodoList();
      toast.success("Successfully updated");
    } catch (error) {
      console.log(error);
    }
  };

  //Complete Todo List
  const completeTodo = id => {
    dispatch({
      type: TODO_COMPELTE,
      payload: id,
    });
  };
  return (
    <TodoContext.Provider
      value={{
        todo: state.todo,
        activeTodo: state.activeTodo,
        completedTodo: state.completeTodo,
        addTodo,
        completeTodo,
        getTodoList,
        deleteTodo,
        updateTodoCompleted,
        updateAllComplete,
        deleteCompleteTodo,
        updateTodo,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};
export default TodoState;
