import { createStore } from "redux";
import reducer from "./reducer";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

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
