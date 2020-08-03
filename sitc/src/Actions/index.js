import axios from 'axios';
import {axiosWithAuth} from '../utils/axiosWithAuth'

export const FETCHING_ADMINTASKS_START = "FETCHING_ADMINTASKS_START";
export const FETCHING_ADMINTASKS_SUCCESS = "FETCHING_ADMINTASKS_SUCCESS";
export const FETCHING_ADMINTASKS_FAILURE = "FETCHING_ADMINTASKS_FAILURE";
export const ADMIN_DELETE_TASK = "ADMIN_DELETE_TASK";
export const ADMIN_EDIT_TASK = "ADMIN_EDIT_TASK";
export const SET_TASK_TO_EDIT = "SET_TASK_TO_EDIT"
export const FETCHING_VOLUNTEERTASKS_START = "FETCHING_VOLUNTEERTASKS_START";
export const FETCHING_VOLUNTEERTASKS_SUCCESS = "FETCHING_VOLUNTEERTASKS_SUCCESS";
export const FETCHING_VOLUNTEERTASKS_FAILURE = "FETCHING_VOLUNTEERTASKS_FAILURE";

export const getTasks = () => dispatch => {
    dispatch({ type: FETCHING_ADMINTASKS_START });
    axiosWithAuth()
        .get('https://school-in-the-cloud-be.herokuapp.com/api/admin/tasks')
        .then( res => {
            dispatch({ type: FETCHING_ADMINTASKS_SUCCESS, payload: res.data})
            console.log('get tasks axios call res.data',res.data)
        })
        .catch( err => console.log('error getting task list ', err))
};

export const deleteTaskData = taskToDelete => dispatch => {
    axiosWithAuth()
    .delete(`https://school-in-the-cloud-be.herokuapp.com/api/admin/tasks/${taskToDelete}`)
    .then( res => {
        console.log(res.data)
        dispatch({ type: ADMIN_DELETE_TASK })
    })
    .catch( err => console.log('error deleting task', err))
};

export const editTaskInfo = taskToEdit => dispatch => {
    axiosWithAuth()
    .put(`https://school-in-the-cloud-be.herokuapp.com/api/admin/tasks/${taskToEdit.id}`, taskToEdit)
    .then( res => {
       console.log('edited task info',res.data)
       dispatch({ type: ADMIN_EDIT_TASK, payload: res.data})
    })
    .catch( err => console.log('problem saving edited task',err))
}

export const setTaskToEdit = taskToEdit => {
    console.log(taskToEdit)
    return{ type: SET_TASK_TO_EDIT, payload: taskToEdit}
}
export const getVolunteerTasks = () =>
 dispatch => {
    dispatch({type: FETCHING_VOLUNTEERTASKS_START});
    axiosWithAuth()
    .get("https://school-in-the-cloud-be.herokuapp.com/api/admin/tasks")
    .then(res => {
        console.log(res.data)
        dispatch({type: FETCHING_VOLUNTEERTASKS_SUCCESS, payload: res.data})
    })
    .catch(err => {
        dispatch({type: FETCHING_VOLUNTEERTASKS_FAILURE, payload: err})
        console.log(err)
    })
}