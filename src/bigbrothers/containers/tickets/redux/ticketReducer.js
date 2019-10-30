import {
  EDIT_TICKET_NAME,
  EDIT_TICKET_DESCRIPTION,
  SET_TICKET_HOURS,
  UPDATE_TICKET_USED_HOURS,
  UPDATE_MANAGER,
  SET_LOADING,
  SET_ERROR,
  UPDATE_URGENT_LEVEL,
  UPDATE_TICKET_STATUS,
  UPDATE_RELATED_PROJECT,
  SET_CREATED_DATE,
  SET_DUE_DATE
} from "./ticketActionTypes";

const INITIAL_STATE = {
  ticketName: null,
  ticketDescription: null,
  budgetHours: 0,
  usedHours: 0,
  urgentLevel: null,
  status: null,
  project: null,
  created_date: null,
  due_date: null,
  manager: null,
  loading: false,
  error: false // boolean
};

function ticketReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case EDIT_TICKET_NAME:
      return { ...state, ticketName: action.payload };
    case EDIT_TICKET_DESCRIPTION:
      return { ...state, ticketDescription: action.payload };
    case SET_TICKET_HOURS:
      return { ...state, budgetHours: action.payload };
    case UPDATE_TICKET_USED_HOURS:
      return { ...state, usedHours: action.payload };
    case UPDATE_MANAGER:
      return { ...state, manager: action.payload };
    case UPDATE_URGENT_LEVEL:
      return { ...state, urgentLevel: action.payload };
    case UPDATE_RELATED_PROJECT:
      return { ...state, project: action.payload };
    case SET_CREATED_DATE:
      return { ...state, created_date: action.payload };
    case SET_DUE_DATE:
      return { ...state, due_date: action.payload };
    case UPDATE_TICKET_STATUS:
      return { ...state, status: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  };
};

export default ticketReducer;
