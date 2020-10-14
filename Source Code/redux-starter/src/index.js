import store from "./store";

store.subscribe(() => {
  console.log("Store changed!", store.getState()); //called everytime state of store changes
});

store.dispatch({
  type: "bugAdded",
  payload: {
    description: "Bug1",
  },
});

store.dispatch({
  type: "bugRemoved",
  payload: {
    id: 1,
  },
});

console.log(store.getState());
