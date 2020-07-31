import {combineReducers} from 'redux'
import {reducer} from './index'
import {volunteerTaskReducer} from './VolunteerReducer'

export const rootReducer = combineReducers({
    volunteerTaskReducer,
    reducer
})