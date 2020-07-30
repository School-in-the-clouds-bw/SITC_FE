import {
  FETCHING_VOLUNTEERTASKS_START,
  FETCHING_VOLUNTEERTASKS_SUCCESS,
  FETCHING_VOLUNTEERTASKS_FAILURE,
} from "../Actions/VolunteerTaskActions";

const initialState = {
  loading: false,
  tasks: [],
  isFetching: false,
  error: "",
  didFetch: false,
};

export const userEditReducer = (state = initialState, action) => {
  switch (action.type) {
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
        didFetch: true,
      };
    case FETCHING_VOLUNTEERTASKS_FAILURE:
      return {
        ...state,
        isFetching: false,
        didFetch: false,
        error: "",
      };
    default:
      return state;
  }
};
