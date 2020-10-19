import { createAction, createReducer } from "@reduxjs/toolkit";

//Action Creators

export const bugAdded = createAction("bugAdded");
export const bugResolved = createAction("bugResolved");
export const bugRemoved = createAction("bugRemoved");

//Reducer
let lastId = 0;

//arg 1 - initial state, arg 2 - (key=actions, value=fns that handle actions), obj that maps objs to fns that handle action
//maps actions: functions (events => event handlers)
//fn passed takes two args (state, action) can rename to alias
export default createReducer([], {
  bugAddd: (bugs, action) => {
    bugs.push({
      id: ++lastId,
      description: action.payload.description, //add new bug object (ID, description, resolved)
      resolved: false,
    });
  },
  bugDeleted: (bugs, action) => {
    bugs.filter((bug) => bug.id !== action.payload.id);
  },
  bugResolved: (bugs, action) => {
    const index = bugs.findIndex((bug) => bug.id === action.payload.id);
    bugs[index].resolved = true;
  },
});
