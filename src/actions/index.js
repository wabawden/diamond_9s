import { FETCH_TILE_ACTIVITY, ADD_TILE_NOTE, ADD_POSITION_NOTE } from './types';

export const fetchTileActivity = () => {
    console.log("hello from fetchTileActivity")
    return {
        type: FETCH_TILE_ACTIVITY
    };
};

export const addTileNote = (id, type, value) => {
    return {
        type: ADD_TILE_NOTE,
        payload: {id, type, value}
    }
}

export const addPositionNote = (position, note) => {
    return {
        type: ADD_POSITION_NOTE,
        payload: {position, note}
    }
}