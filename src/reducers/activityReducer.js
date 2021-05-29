import { FETCH_STATE, FETCH_TILE_ACTIVITY } from '../actions/types';
import { tileActivity } from '../initialState';


export default (state = [], action) => {
    switch (action.type) {
        case FETCH_TILE_ACTIVITY:
            return { ...state, tileActivity};
        case FETCH_STATE:
            return {...state};
        default:
            console.log("default")
            return tileActivity;
    }
};