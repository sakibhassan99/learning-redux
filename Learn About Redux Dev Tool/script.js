// ------------------------ Learn About Redux Dev Tool ------------------------

import { createStore } from "redux";

const countEl = document.querySelector(".count");

const initialState = {
  post: 0,
  name: "sakib",
};

const INCREASE = "post/increase";
const DECREASE = "post/decrease";
const INCREASE_BY = "post/increaseBy";
const DECREASE_BY = "post/decreaseBy";

function reducer(state = initialState, action) {
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

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
  countEl.innerText = store.getState().post;
});

countEl.innerText = store.getState().post;

countEl.addEventListener("click", () => {
  store.dispatch({ type: INCREASE });
});

console.log(store);
store.dispatch({ type: INCREASE });
store.dispatch({ type: DECREASE });
store.dispatch({ type: DECREASE });
store.dispatch({ type: INCREASE_BY, payload: 11 });
store.dispatch({ type: DECREASE_BY, payload: 4 });

// unsubscribe();
