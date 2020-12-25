import { ADD_TODO, TODO_COMPELTE, GET_TODO } from "./types";
// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todo: [...state.todo, action.payload],
      };
    case TODO_COMPELTE:
      break;
    case GET_TODO:
      return {
        ...state,
        todo: action.payload,
        activeTodo:
          action.payload.length > 0 &&
          action.payload.filter(todo => !todo.completed),
        completeTodo:
          action.payload.length > 0 &&
          action.payload.filter(todo => todo.completed),
      };
    default:
      return state;
  }
};
