import { createStore } from "redux";

const reducerFn = (state = { counter: 10 }, action) => {
  if (action.type === "INCREMENT") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "DECREMENT") {
    return {
      counter: state.counter - 1,
    };
  }
  if (action.type === "ADD_BY") {
    return {
      counter: state.counter + action.payload,
    };
  }

  return state;
};

export const store = createStore(reducerFn);
