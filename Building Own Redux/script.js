// ------------------------ Lets build own redux ------------------------
import { myCreateStore } from "./my-redux";

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

const myStore = myCreateStore(reducer);

const unsubscribe = myStore.subscribe(() => {
  countEl.innerText = myStore.getState().post;
});

countEl.addEventListener("click", () => {
  myStore.dispatch({ type: INCREASE });
});

myStore.dispatch({ type: INCREASE });
myStore.dispatch({ type: DECREASE });
myStore.dispatch({ type: DECREASE });
myStore.dispatch({ type: INCREASE_BY, payload: 11 });
myStore.dispatch({ type: DECREASE_BY, payload: 4 });
console.log(myStore.getState());
// unsubscribe();
