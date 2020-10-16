import reducer from "../src/store/reducer";

function createStore(reducer) {
  let state;
  let listeners = [];

  function subscribe(listener) {
    listeners.push(listener);
  }

  function dispatch(action) {
    state = reducer(state, action); //pass current state + action (param) to reducer fn

    for (let i = 0; i < listeners.length; i++) listeners[i](); //notify listeners (get listener, call it)
  }

  function getState() {
    return state;
  }

  return {
    subscribe,
    dispatch,
    getState,
  };
}

export default createStore(reducer);
