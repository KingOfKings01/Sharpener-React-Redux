import { configureStore, createSlice } from "@reduxjs/toolkit";
import { createStore } from "redux";


const initialState = { counter : 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // increment: (state) => ({...state, counter: state.counter + 1 }),
    // decrement: (state) => ({...state, counter: state.counter - 1 }),
    // incrementByAmount: (state, action) => ({...state, counter: state.counter + action.amount }),
    // showCounter: (state) => ({...state, showCounter:!state.showCounter })
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    incrementByAmount(state, action) {
      state.counter += action.payload;
    },
    showCounter(state) {
      state.showCounter =!state.showCounter;
    }
  },
})

// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "increment":
//       return {...state,  counter: state.counter + 1 };
//     case "decrement":
//       return {...state,  counter: state.counter - 1 };
//     case "IncrementByAmount":
//       return {...state, counter: state.counter + action.amount };
//     case "showCounter":
//       return { ...state, showCounter: !state.showCounter}
//     default:
//       return state;
//   }
// };

const initialAuthState = { isAuthenticated: false }

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true
    },
    logout: (state) => {
      state.isAuthenticated = false
    }
  }
})


// export const store = createStore(counterReducer);
export const store = configureStore({
  reducer: {counter:  counterSlice.reducer, auth: authSlice.reducer}
  // reducer: counterSlice.reducer
});

export const counterActions = counterSlice.actions
export const authActions = authSlice.actions