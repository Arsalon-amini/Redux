import configureStore from "./store/configureStore";
import { bugAdded, bugResolved, getUnresolvedBugs } from "./store/bugs";
import * as action from "./store/projects";

const store = configureStore();

store.subscribe(() => {
  console.log("store changed", store.getState());
});

store.dispatch(action.projectAdded({ description: "Project 1" }));
store.dispatch(action.projectAdded({ description: "Project 3" }));
store.dispatch(action.projectAdded({ description: "Project 4" }));
store.dispatch(action.projectRemoved({ id: 1 }));

store.dispatch(bugAdded({ description: "Bug 1" }));
store.dispatch(bugAdded({ description: "Bug 2" }));
store.dispatch(bugAdded({ description: "Bug 3" }));
store.dispatch(bugResolved({ id: 1 }));

const unresolvedBugs = getUnresolvedBugs(store.getState()); 
console.log(unresolvedBugs); 