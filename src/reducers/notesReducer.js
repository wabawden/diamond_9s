import { ADD_TILE_NOTE, ADD_POSITION_NOTE } from '../actions/types';

export default (state =[], action) => {
    switch (action.type) {
        case ADD_TILE_NOTE:
            return [ ...state, {id: action.payload.id, type: action.payload.type,   text: action.payload.value.text}]
        default:
            console.log("default")
            return state;
    }
};