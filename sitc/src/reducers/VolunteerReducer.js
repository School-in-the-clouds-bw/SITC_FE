import {
  FETCHING_VOLUNTEERTASKS_START,
  FETCHING_VOLUNTEERTASKS_SUCCESS,
  FETCHING_VOLUNTEERTASKS_FAILURE,
  FETCHING_VOLUNTEERPROFILE_START,
  FETCHING_VOLUNTEERPROFILE_SUCCESS,
  FETCHING_VOLUNTEERPROFILE_FAILURE
} from "../Actions/VolunteerActions";

const initialState = {
  tasks: [],
  isFetching: false,
  err: "",
  profile: {}
  
};

export const volunteerTaskReducer = (state = initialState, action) => {
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
