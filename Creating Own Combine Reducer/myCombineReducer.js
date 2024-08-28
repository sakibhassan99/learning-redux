export function myCombineReducer(reducers) {
  let reducersKey = Object.keys(reducers);

  return function (state = {}, action) {
    const nextState = {};

    for (let i = 0; i < reducersKey.length; i++) {
      const key = reducersKey[i];
      const reducer = reducers[key];
      const previousStateKey = state[key];
      const nextStateForKey = reducer(previousStateKey, action);
      nextState[key] = nextStateForKey;
    }

    return nextState;
  };
}
