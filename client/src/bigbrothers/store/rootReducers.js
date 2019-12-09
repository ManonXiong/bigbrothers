import { combineReducers } from "redux";
import { reducer as loginFormReducer } from "redux-form";
import projectsReducer from "../store/projectsReducer";
import ticketsReducer from "../store/ticketsReducer";

export default combineReducers({
  login: loginFormReducer,
  projects: projectsReducer,
  tickets: ticketsReducer
});
