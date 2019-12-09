import { GET_TICKETS } from "../actions/types";

function ticketsReducer(state={}, action) {
  switch (action.type) {
    case GET_TICKETS:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default ticketsReducer;
