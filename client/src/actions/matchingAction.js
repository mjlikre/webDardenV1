import { FETCH_USER_GUIDE_MATCH, FETCH_USER_GUIDE_MATCH_ERROR } from "./types";
import axios from "axios";

export const fetchMatch = coords => async dispatch =>{
    try{
        const response = await axios.post('/api/match', {
            lat : coords.lat,
            lng: coords.lng
        })
        dispatch({ type: FETCH_USER_GUIDE_MATCH, payload: response.data});
    } catch (err) {
        dispatch({ type: FETCH_USER_GUIDE_MATCH_ERROR, payload: "Something went wrong, sorry, try again later!!"})
    }
}

