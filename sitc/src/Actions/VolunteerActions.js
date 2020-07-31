import {axiosWithAuth} from '../utils/axiosWithAuth';

export const FETCHING_VOLUNTEERTASKS_START = "FETCHING_VOLUNTEERTASKS_START";
export const FETCHING_VOLUNTEERTASKS_SUCCESS = "FETCHING_VOLUNTEERTASKS_SUCCESS";
export const FETCHING_VOLUNTEERTASKS_FAILURE = "FETCHING_VOLUNTEERTASKS_FAILURE";
export const FETCHING_VOLUNTEERPROFILE_START = "FETCHING_VOLUNTEERPROFILE_START";
export const FETCHING_VOLUNTEERPROFILE_SUCCESS = "FETCHING_VOLUNTEERPROFILE_SUCCESS"
export const FETCHING_VOLUNTEERPROFILE_FAILURE = "FETCHING_VOLUNTEERPROFILE_FAILURE"

const id = window.localStorage.getItem('id')

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

