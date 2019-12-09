import bigbrothersapi from "../api/bigbrotherapi";
import {
    GET_PROJECTS,
    GET_PROJECT,
    EDIT_PROJECT,
    CREATE_PROJECT,
    DELETE_PROJECT,
    GET_TICKETS,
    GET_TICKET,
    DELETE_TICKET,
    CREATE_TICKET,
    EDIT_TICKET
} from "./types";

export const createProject = (newProjectValues) => async dispatch => {
  const response = await bigbrothersapi.post("/projects", newProjectValues);
  console.log(response); // debug

  dispatch({ type: CREATE_PROJECT, payload: response.data });
};

export const getProjects = () => async dispatch => {
  const res = await bigbrothersapi.get("/projects");
  console.log(res); //debug

  dispatch({ type: GET_PROJECTS, payload: res.data });
};

export const getProject = id => async dispatch => {
  const res = await bigbrothersapi.get(`/projects/${id}`);

  dispatch({ type: GET_PROJECT, payload: res.data });
};

export const editProject = (id, formValues) => async dispatch => {
  const res = await bigbrothersapi.put(`/projects/${id}`, formValues);

  dispatch({ type: EDIT_PROJECT, payload: res.data });
};

export const deleteProject = (id) => async dispatch => {
  await bigbrothersapi.delete(`/projects/${id}`);

  dispatch({ type: DELETE_PROJECT, payload: id });
}

export const getTickets = () => async dispatch => {
    const res = await bigbrothersapi.get("/tickets");
    console.log(res); //debug
  
    dispatch({ type: GET_TICKETS, payload: res.data });
};

export const getTicket = id => async dispatch => {
  const res = await bigbrothersapi.get(`/tickets/${id}`);

  dispatch({ type: GET_TICKET, payload: res.data });
};

export const createTicket = (newTicketValues) => async dispatch => {
  const response = await bigbrothersapi.post("/tickets", newTicketValues);
  console.log(response); // debug

  dispatch({ type: CREATE_TICKET, payload: response.data });
};

export const editTicket = (id, formValues) => async dispatch => {
  const res = await bigbrothersapi.put(`/tickets/${id}`, formValues);

  dispatch({ type: EDIT_TICKET, payload: res.data });
};

export const deleteTicket = (id) => async dispatch => {
  await bigbrothersapi.delete(`/tickets/${id}`);

  dispatch({ type: DELETE_TICKET, payload: id });
};
 