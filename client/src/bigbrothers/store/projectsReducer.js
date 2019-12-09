import _ from "lodash";
import { 
  GET_PROJECTS,
  GET_PROJECT,
  EDIT_PROJECT,
  CREATE_PROJECT,
  DELETE_PROJECT
} from "../actions/types";

function projectsReducer(state={}, action) {
  switch (action.type) {
    case GET_PROJECT:
      return { ...state, [action.payload.id]: action.payload };
    case GET_PROJECTS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case CREATE_PROJECT:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_PROJECT:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_PROJECT:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};

export default projectsReducer;
