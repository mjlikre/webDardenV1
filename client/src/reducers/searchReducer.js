import { FETCH_CITY, FETCH_CITY_ERROR } from './../actions/types';


export default function(state = {}, action) {

    switch(action.type) {
        case FETCH_CITY:
            return {...state, city: action.payload};
        case FETCH_CITY_ERROR:
            return {...state, city: action.payload};
        default:
            return state;
    }
}