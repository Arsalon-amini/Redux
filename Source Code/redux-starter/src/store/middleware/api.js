import axios from "axios";
import * as actions from "../api";

const api = ({ dispatch }) => (next) => async (action) => {
  if (action.type !== actions.apiCallBegan.type) return next(action);

  const { url, method, data, onStart, onSuccess, onError } = action.payload;
  if (onStart) dispatch({ type: onStart });

  next(action);
  try {
    const response = await axios.request({
      baseURL: "http://localhost:9001/api",
      url,
      method,
      data,
    });

    dispatch(actions.apiCallSuccess(response.data)); //dispatching a new action w/ data as payload

    if (onSuccess) dispatch({ type: onSuccess, payload: response.data }); //specific success action
  } catch (error) {
    dispatch(actions.apiCallFailed(error.message)); //general error
    if (onError) dispatch({ type: onError, payload: error }); //specific
  }
};
export default api;
