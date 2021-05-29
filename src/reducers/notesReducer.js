import _ from 'lodash';

import { ADD_TILE_NOTE, ADD_POSITION_NOTE, DELETE_NOTE, FETCH_STATE } from '../actions/types';

export default (state =[], action) => {
    switch (action.type) {
        case ADD_TILE_NOTE:
            return [ ...state, {id: action.payload.id, type: action.payload.type,   text: action.payload.value}];
        case DELETE_NOTE:
            const note = state.find((note)=> note.id === action.payload.id && note.type === action.payload.type && note.text === action.payload.text)
            return _.pull(state, note)
        case FETCH_STATE:
            return [...state]
        default:
            console.log("default")
            return state;
    }
};