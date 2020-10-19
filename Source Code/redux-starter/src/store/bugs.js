import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";

//Reducers

let lastId = 0;

const slice = createSlice({
  name: "bugs",
  initialState: [],
  reducers: {
    bugAdded: (bugs, action) => {
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
  },
});

export const { bugAdded, bugDeleted, bugResolved } = slice.actions;
export default slice.reducer;
