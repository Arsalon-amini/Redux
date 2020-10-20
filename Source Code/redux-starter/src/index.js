import configureStore from "./store/configureStore";
import * as actions from "./store/bugs";
import * as projects from "./store/projects";

const store = configureStore();

store.subscribe(() => {
  console.log("store changed", store.getState());
});

store.dispatch(projects.projectAdded({ description: "Project 1" }));
store.dispatch(projects.projectAdded({ description: "Project 3" }));
store.dispatch(projects.projectAdded({ description: "Project 4" }));
store.dispatch(projects.projectRemoved({ id: 1 }));

store.dispatch(actions.bugAdded({ description: "Bug 1" }));
store.dispatch(actions.bugAdded({ description: "Bug 2" }));
store.dispatch(actions.bugAdded({ description: "Bug 3" }));
store.dispatch(actions.bugDeleted({ id: 1 }));

const unresolvedBugs = store
  .getState()
  .entities.bugs.filter((bug) => !bug.resolved);

console.log(unresolvedBugs);
