import { combineReducers } from "redux";
import ticketReducer from "../containers/ticket/redux/ticketReducer";
import projectReducer from "../containers/projects/redux/projectReducer";

export default combineReducers({
  ticket: ticketReducer,
  project: projectReducer
});
