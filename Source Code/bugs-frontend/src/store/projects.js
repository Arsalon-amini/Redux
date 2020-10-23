import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";
let lastId = 0;

const slice = createSlice({
  name: "projects",
  initialState: [],
  reducers: {
    projectAdded: (projects, action) => {
      projects.push({
        id: ++lastId,
        description: action.payload.description, //add new bug object (ID, description, resolved)
      });
    },
    projectRemoved: (projects, action) => {
      projects.filter((project) => project.id !== action.payload.id);
    },
  },
});

export const { projectAdded, projectRemoved } = slice.actions;
export default slice.reducer;
