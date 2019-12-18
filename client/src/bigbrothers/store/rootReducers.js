import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import projectsReducer from "../store/projectsReducer";
import ticketsReducer from "../store/ticketsReducer";

export default combineReducers({
  form: formReducer,
  projects: projectsReducer,
  tickets: ticketsReducer
});
