import { createAction } from "@reduxjs/toolkit";

//Action Creators

export const bugAdded = createAction("bugAdded");
export const bugResolved = createAction("bugResolved");
export const bugRemoved = createAction("bugRemoved");

//Reducer
let lastId = 0;

export default function reducer(state = [], action) {
  switch (action.type) {
    case bugAdded.type:
      return [
        ...state, //copy all bugs in current state
        {
          id: ++lastId,
          description: action.payload.description, //add new bug object (ID, description, resolved)
          resolved: false,
        },
      ];
    case bugResolved.type:
      return state.filter((bug) => bug.id !== action.payload.id); //creates new array, without bug w/ given ID
    case bugResolved.type:
      return state.map((bug) =>
        bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
      );
    default:
      return state;
  }
}
