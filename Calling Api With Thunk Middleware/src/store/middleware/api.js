export const apiMiddleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    const BASE_URL = "https://fakestoreapi.com";

    if (action.type === "api/makeCall") {
      next(action);
      const { url, onSuccess, onStart, onError } = action.payload;
      dispatch({
        type: onStart,
      });
      fetch(`${BASE_URL}/${url}`)
        .then((res) => res.json())
        .then((data) => {
          dispatch({
            type: onSuccess,
            payload: data,
          });
        })
        .catch((err) => {
          dispatch({
            type: onError,
          });
        });
    } else {
      next(action);
    }
  };

export const makeApiCall = (payload) => ({
  type: "api/makeCall",
  payload,
});
