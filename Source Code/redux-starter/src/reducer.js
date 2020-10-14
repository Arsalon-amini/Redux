//Action aka event (object) -> reducer aka handler (function) -> returns store (JS object)

//Action object
// {
//     type: 'bugAdded',
//     payload: {
//         description: 'a description',
//         id: 1
//     }
// }

//store object (simplified case) - array of bug objects
// [
//     {id: 2, description: 'bug description', resolved: false},
//     {id: 3, description: 'bug description', resolved: false},
//     {id: 4, description: 'bug description', resolved: false},
// ]

//store object (single JS object representing state) - real app
// {
//     bugs: [
//         id: 1,
//         description: "a bug description",
//         resolved: false
//     ],
//     currentUser: { }
// }

let lastId = 0;

function reducer(state = [], action) {
  if (action.type === "bugAdded")
    return [
      ...state, //copy all bugs in current state
      {
        id: ++lastId,
        description: action.payload.description, //add new bug object (ID, description, resolved)
        resolved: false,
      },
    ];
  else if (action.type === "bugRemoved")
    return state.filter((bug) => bug.id !== action.payload.id); //creates new array, without bug w/ given ID

  return state; //if action doesn't exist, return current state
}
