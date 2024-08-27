// ------------------------ Lets build own redux ------------------------

export function myCreateStore(reducer) {
  let state;
  const listeners = [];
  const store = {
    getState() {
      return state;
    },
    dispatch(action) {
      state = reducer(state, action);
      listeners.forEach((listener) => listener());
    },
    subscribe(Listener) {
      listeners.push(Listener);
      return () => {
        let listenerIndex = listeners.findIndex(
          (listener) => listener === Listener
        );
        listeners.splice(listenerIndex, 1);
      };
    },
  };

  return store;
}
