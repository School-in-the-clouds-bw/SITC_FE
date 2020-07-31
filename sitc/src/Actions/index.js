import axios from 'axios';
import {axiosWithAuth} from '../utils/axiosWithAuth'

export const FETCHING_ADMINTASKS_START = "FETCHING_ADMINTASKS_START";
export const FETCHING_ADMINTASKS_SUCCESS = "FETCHING_ADMINTASKS_SUCCESS";
export const FETCHING_ADMINTASKS_FAILURE = "FETCHING_ADMINTASKS_FAILURE";
export const ADMIN_DELETE_TASK = "ADMIN_DELETE_TASK"

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
