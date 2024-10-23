import { createStore } from "redux";

const initialState = { counter : 0, showCounter: true };

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      return {...state,  counter: state.counter + 1 };
    case "decrement":
      return {...state,  counter: state.counter - 1 };
    case "IncrementByAmount":
      return {...state, counter: state.counter + action.amount };
    case "showCounter":
      return { ...state, showCounter: !state.showCounter}
    default:
      return state;
  }
};

export const store = createStore(counterReducer);
