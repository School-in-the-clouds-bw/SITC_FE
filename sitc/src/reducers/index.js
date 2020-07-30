import { FETCHING_ADMINTASKS_START, FETCHING_ADMINTASKS_SUCCESS, FETCHING_ADMINTASKS_FAILURE } from '../Actions';


const initialState = {
    isFetching: false,
    tasks:[],
    error:''
}

export const reducer = (state = initialState, action ) => {
    switch( action.type){
        case FETCHING_ADMINTASKS_START:
            return{
                ...state,
                isFetching: true,
                error:''
            };
        case FETCHING_ADMINTASKS_SUCCESS:
            return{
                ...state,
                tasks: action.payload,
                isFetching: false
            };
        case FETCHING_ADMINTASKS_FAILURE:
            return{
                ...state,
                isFetching: false,
                error:"error retrieving tasks"
            }
        default:
            return state;
    }
}