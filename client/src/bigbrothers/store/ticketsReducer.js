import _ from "lodash";
import {
  GET_TICKETS,
  GET_TICKET,
  DELETE_TICKET,
  CREATE_TICKET,
  EDIT_TICKET
} from "../actions/types";

function ticketsReducer(state={}, action) {
  switch (action.type) {
    case GET_TICKET:
      return { ...state, [action.payload.id]: action.payload };
    case GET_TICKETS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case CREATE_TICKET:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_TICKET:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_TICKET:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};

export default ticketsReducer;
