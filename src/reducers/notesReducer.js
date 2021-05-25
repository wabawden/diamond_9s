import { ADD_TILE_NOTE, ADD_POSITION_NOTE } from '../actions/types';

export default (state =[], action) => {
    switch (action.type) {
        case ADD_TILE_NOTE:
            return [ ...state, {id: action.payload.id, note: action.payload.note.note}]
        default:
            console.log("default")
            return state;
    }
};