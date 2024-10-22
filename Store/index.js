import { createStore } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case "increment":
      return { counter: state.counter + 1 };
    case "decrement":
      return { counter: state.counter - 1 };
    case "INCREMENTBY2":
      return { counter: state.counter + 2 };
    case "DECREMENTBY2":
      return { counter: state.counter - 2 };
    default:
      return state;
  }
};

export const store = createStore(counterReducer);