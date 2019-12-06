import {
  EDIT_PROJECT_NAME,
  EDIT_PROJECT_DESCRIPTION,
  SET_MANAGER,
  SET_ERROR,
  SET_LOADING,
  SET_PROJECT_HOURS,
  UPDATE_PROJECT_USED_HOURS
} from "./projectActionTypes";

const INITIAL_STATE = {
  projectName: null,
  projectDescription: null,
  budgetHours: 0,
  usedHours: 0,
  manager: null,
  loading: true,
  error: false // boolean
};

function projectReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case EDIT_PROJECT_NAME:
      return { ...state, projectName: action.payload };
    case EDIT_PROJECT_DESCRIPTION:
      return { ...state, projectDescription: action.payload };
    case UPDATE_PROJECT_USED_HOURS:
      return { ...state, usedHours: action.payload };
    case SET_PROJECT_HOURS:
      return { ...state, budgetHours: action.payload };
    case SET_MANAGER:
      return { ...state, manager: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default projectReducer;
