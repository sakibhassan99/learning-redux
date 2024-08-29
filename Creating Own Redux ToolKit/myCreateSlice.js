import { produce } from "immer";

export function myCreateSlice(config) {
  const { name, initialState, reducers } = config;
  const actions = {};
  Object.keys(config.reducers).forEach((key) => {
    actions[key] = (payload) => {
      return {
        type: `${name}/${key}`,
        payload,
      };
    };
  });

  function reducer(originalState = initialState, action) {
    return produce(originalState, (state) => {
      const caseReducer = reducers[action.type.split("/")[1]];
      if (caseReducer) {
        caseReducer(state, action);
      }
      return state;
    });
  }

  return { actions, reducer };
}
