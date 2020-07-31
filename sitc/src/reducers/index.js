import {
  FETCHING_ADMINTASKS_START,
  FETCHING_ADMINTASKS_SUCCESS,
  FETCHING_ADMINTASKS_FAILURE,
  ADMIN_DELETE_TASK,
  FETCHING_VOLUNTEERTASKS_START,
  FETCHING_VOLUNTEERTASKS_SUCCESS,
  FETCHING_VOLUNTEERTASKS_FAILURE,
} from "../Actions";

const initialState = {
  isFetching: false,
  tasks: [],
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_ADMINTASKS_START:
      return {
        ...state,
        isFetching: true,
        error: "",
      };
    case FETCHING_ADMINTASKS_SUCCESS:
      return {
        ...state,
        tasks: action.payload,
        isFetching: false,
      };
    case FETCHING_ADMINTASKS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: "error retrieving tasks",
      };
    case ADMIN_DELETE_TASK:
      return {
        ...state,
      };
    case FETCHING_VOLUNTEERTASKS_START:
      return {
        ...state,
        isFetching: true,
        error: "",
      };
    case FETCHING_VOLUNTEERTASKS_SUCCESS:
      return {
        ...state,
        tasks: action.payload,
        isFetching: false,
      };
    case FETCHING_VOLUNTEERTASKS_FAILURE:
      return {
        ...state,
        isFetching: false,
        err: "error retrieving volunteer tasks",
      };

    default:
      return state;
  }
};
