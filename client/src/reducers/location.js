import { FETCH_LOCATION } from "../actions/types";

export default function(state = {}, action) {
    if (action.type === FETCH_LOCATION) {
        return {...state, location: action.payload };
    } else {
        return state;
    }
}