import configureStore from "./store/configureStore";
import {
  bugAdded,
  bugResolved,
  bugAssignedToUser,
  getBugsByUser,
} from "./store/bugs";
import { userAdded } from "./store/users";
import { projectAdded, projectRemoved } from "./store/projects";

const store = configureStore();

store.dispatch((dispatch, getState) => {
  dispatch({ type: "bugsRecieved", bugs: [1, 2, 3] }); //simulating API call response.data
});
