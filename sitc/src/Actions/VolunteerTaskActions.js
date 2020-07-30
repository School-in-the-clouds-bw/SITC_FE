import {axiosWithAuth} from '../utils/axiosWithAuth';

export const FETCHING_VOLUNTEERTASKS_START = "FETCHING_VOLUNTEERTASKS_START";
export const FETCHING_VOLUNTEERTASKS_SUCCESS = "FETCHING_VOLUNTEERTASKS_SUCCESS";
export const FETCHING_VOLUNTEERTASK_FAILURE = "FETCHING_VOLUNTEERTASK_FAILURE";

export const getVolunteerTasks = () => dispatch => {
    dispatch({type: FETCHING_VOLUNTEERTASKS_START});
    axiosWithAuth()
    .get("https://school-in-the-cloud-be.herokuapp.com/api/admin/tasks")
    .then(res => {
        console.log(res.data)
        dispatch({type: FETCHING_VOLUNTEERTASKS_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.log(err)
    })
}