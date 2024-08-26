// ------------------------ How Redux Works Behind The Scene ------------------------

// let reduxState = {
//   post: 0,
//   name: "sakib",
// };

// function reducer(state, action) {
//   if (action.type === "post/increment") {
//     return { ...state, post: state.post + 1 };
//   } else if (action.type === "post/decrement") {
//     return { ...state, post: state.post - 1 };
//   } else if (action.type === "post/incrementBy") {
//     return { ...state, post: state.post + action.payload };
//   } else if (action.type === "post/decrementBy") {
//     return { ...state, post: state.post - action.payload };
//   }
//   return state;
// }

// What redux will do

// console.log(reduxState);
// reduxState = reducer(reduxState, { type: "post/increment" });
// console.log(reduxState);
// reduxState = reducer(reduxState, { type: "post/increment" });
// console.log(reduxState);
// reduxState = reducer(reduxState, { type: "post/decrement" });
// console.log(reduxState);
// reduxState = reducer(reduxState, { type: "post/incrementBy", payload: 10 });
// console.log(reduxState);
// reduxState = reducer(reduxState, { type: "post/decrementBy", payload: 5 });
// console.log(reduxState);

// ------------------------ Lets work with Redux ------------------------

import { createStore } from "redux";

const initialState = {
  post: 0,
  name: "sakib",
};

const INCREASE = "post/increase";
const DECREASE = "post/decrease";
const INCREASE_BY = "post/increaseBy";
const DECREASE_BY = "post/decreaseBy";

function reducer(state = initialState, action) {
  //   if (action.type === INCREASE) {
  //     return { ...state, post: state.post + 1 };
  //   } else if (action.type === DECREASE) {
  //     return { ...state, post: state.post - 1 };
  //   } else if (action.type === INCREASE_BY) {
  //     return { ...state, post: state.post + action.payload };
  //   } else if (action.type === DECREASE_BY) {
  //     return { ...state, post: state.post - action.payload };
  //   }
  //   return state;

  switch (action.type) {
    case INCREASE:
      return { ...state, post: state.post + 1 };

    case DECREASE:
      return { ...state, post: state.post - 1 };

    case INCREASE_BY:
      return { ...state, post: state.post + action.payload };

    case DECREASE_BY:
      return { ...state, post: state.post - action.payload };

    default:
      return state;
  }
}

const store = createStore(reducer);
store.subscribe(() => {
  console.log(store.getState());
});

console.log(store);
store.dispatch({ type: INCREASE });
store.dispatch({ type: DECREASE });
store.dispatch({ type: DECREASE });
store.dispatch({ type: INCREASE_BY, payload: 11 });
store.dispatch({ type: DECREASE_BY, payload: 4 });
