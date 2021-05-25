import { FETCH_TILE_ACTIVITY } from '../actions/types';
import { tileActivity } from '../initialState';

const INITIAL_STATE = {
    foo: null,
    bar: null
};

export default (state = [INITIAL_STATE], action) => {
    switch (action.type) {
        case FETCH_TILE_ACTIVITY:
            return { ...state, tileActivity};
        default:
            console.log("default")
            return tileActivity;
    }
};