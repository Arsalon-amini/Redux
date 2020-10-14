import store from "./store";
import * as actions from './actions';

const unsubscribe = store.subscribe(() => {
  console.log("Store changed!", store.getState()); //called everytime state of store changes
});

store.dispatch(actions.bugAdded("Bug 1"));

store.dispatch(actions.bugRemoved(1));

console.log(store.getState());
