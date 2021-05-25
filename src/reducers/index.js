import { combineReducers } from 'redux';

import activityReducer from './activityReducer';
import notesReducer from './notesReducer';

export default combineReducers({
    activity: activityReducer,
    notes: notesReducer
});