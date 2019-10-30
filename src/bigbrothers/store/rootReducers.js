import { combineReducers } from "redux";
import ticketReducer from "../containers/tickets/redux/ticketReducer";
import projectReducer from "../containers/projects/redux/projectReducer";

export default combineReducers({
  ticket: ticketReducer,
  project: projectReducer
});
