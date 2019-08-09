import {FETCH_LOCATION} from "./types";


export const fetchLocation = location  => dispatch => {

    dispatch ({
        type: FETCH_LOCATION,
        payload: location
    })
};

