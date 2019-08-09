import { FETCH_USER_GUIDE_MATCH, FETCH_USER_GUIDE_MATCH_ERROR } from "../actions/types";

const initial = {
    match: [],
    matchError: ""
}

export default function(state=initial, action){

    switch(action.type) {
        case FETCH_USER_GUIDE_MATCH:
            return {...state, match: action.payload};
        case FETCH_USER_GUIDE_MATCH_ERROR:
            return {...state, matchError: action.payload};
        default:
            return state;
    }
}