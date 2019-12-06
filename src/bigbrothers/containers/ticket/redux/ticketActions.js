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

export const editTicketName = ticket_name => ({
  type: EDIT_TICKET_NAME,
  payload: ticket_name
});

export const editTicketDescription = description => ({
  type: EDIT_TICKET_DESCRIPTION,
  payload: description
});

export const updateUrgentLevel = urgent => ({
  type: UPDATE_URGENT_LEVEL,
  payload: urgent
});

export const updateTicketStatus = status => ({
  type: UPDATE_TICKET_STATUS,
  payload: status
});

export const updateRelatedProject = project => ({
  type: UPDATE_RELATED_PROJECT,
  payload: project
});

export const setTicketCreatedDate = created_date => ({
  type: SET_CREATED_DATE,
  payload: created_date
});

export const setTicketDueDate = due_date => ({
  type: SET_DUE_DATE,
  payload: due_date
});

export const setTicketTime = hrs => ({
  type: SET_TICKET_HOURS,
  payload: hrs
});

export const updateTicketUsedHours = used_hrs => ({
  type: UPDATE_TICKET_USED_HOURS,
  payload: used_hrs
});

export const updateTicketManager = manager => ({
  type: UPDATE_MANAGER,
  payload: manager
});

export const setTicketLoading = loading => ({
  type: SET_LOADING,
  payload: loading
});

export const setTicketError = err => ({
  type: SET_ERROR,
  payload: err // boolean
});
