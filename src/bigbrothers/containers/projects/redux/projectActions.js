import {
    EDIT_PROJECT_NAME,
    EDIT_PROJECT_DESCRIPTION,
    UPDATE_PROJECT_USED_HOURS,
    SET_MANAGER,
    SET_ERROR,
    SET_LOADING,
    SET_PROJECT_HOURS
} from "./projectActionTypes";

// export const updateProject = projects => ({
//     type: UPDATE_PROJECTS,
//     payload: projects // array
// });  -- put in another reducer

export const editProjectName = project_name => ({
    type: EDIT_PROJECT_NAME,
    payload: project_name
});

export const updateProjectUsedHours = used_hrs => ({
    type: UPDATE_PROJECT_USED_HOURS,
    payload: used_hrs
});

export const editProjectDescription = description => ({
    type: EDIT_PROJECT_DESCRIPTION,
    payload: description
});

export const setManager = manager => ({
    type: SET_MANAGER,
    payload: manager
});

export const setProjectTime = hours => ({
    type: SET_PROJECT_HOURS,
    payload: hours
});

export const setError = err => ({
    type: SET_ERROR,
    payload: err // boolean
});

export const setLoading = loading => ({
    type: SET_LOADING,
    payload: loading
});
