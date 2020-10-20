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

store.dispatch({
  type: "error",
  payload: { message: "An error occured." },
});
