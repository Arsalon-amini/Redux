import * as actions from "../src/store/actionTypes";

let lastId = 0;

function reducer(state = [], action) {
  if (action.type === actions.BUG_ADDED)
    return [
      ...state, //copy all bugs in current state
      {
        id: ++lastId,
        description: action.payload.description, //add new bug object (ID, description, resolved)
        resolved: false,
      },
    ];
  else if (action.type === actions.BUG_REMOVED)
    return state.filter((bug) => bug.id !== action.payload.id);
  else if (action.type === actions.BUG_RESOLVED)
    return state.map((bug) => {
      (bug.id === action.payload.id) ? bug.resolved == true : bug;
    });

  return state; //if action doesn't exist, return current state
}
