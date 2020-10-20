import configureStore from "./store/configureStore";
import { bugAdded, bugResolved, bugAssignedToUser, getBugsByUser} from "./store/bugs";
import { userAdded } from "./store/users";
import { projectAdded, projectRemoved } from "./store/projects";

const store = configureStore();

store.subscribe(() => {
  console.log("store changed", store.getState());
});

store.dispatch(userAdded({ name: "arsalon", id: 1 }));
// store.dispatch(userAdded({ name: "Melanie", id: 2 }));
// store.dispatch(userAdded({ name: "Stratos", id: 3 }));



// store.dispatch(bugAdded({ description: "Bug 1" }));
// store.dispatch(bugAdded({ description: "Bug 2" }));
// store.dispatch(bugAdded({ description: "Bug 3" }));
// store.dispatch(bugResolved({ id: 2 }));

// store.dispatch(bugAssignedToUser({ bugId: 1, userId: 1 }));

// store.dispatch(projectAdded({ description: "Project 1" }));
// store.dispatch(projectAdded({ description: "Project 3" }));
// store.dispatch(projectAdded({ description: "Project 4" }));
// store.dispatch(projectRemoved({ id: 1 }));

const bugs = getBugsByUser(1)(store.getState()); 
console.log(bugs); 
