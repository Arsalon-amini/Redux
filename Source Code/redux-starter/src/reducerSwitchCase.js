let lastId = 0;

function reducer(state = [], action) {
  switch (action.type) {
    case "bugAdded":
      return [
        ...state, //copy all bugs in current state
        {
          id: ++lastId,
          description: action.payload.description, //add new bug object (ID, description, resolved)
          resolved: false,
        },
      ];
    case "bugRemoved":
      return state.filter((bug) => bug.id !== action.payload.id); //creates new array, without bug w/ given ID
    default:
      return state;
  }
}


