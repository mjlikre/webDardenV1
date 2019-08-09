import { FETCH_CITY, FETCH_CITY_ERROR } from './types'
import axios from "axios";

export const fetchCity = city => async dispatch => {

    try {
        const response = await axios.post('/api/search', {
            location: city
            }
            // headers: { authorization: localStorage.getItem('token')},}
        );

        dispatch({ type: FETCH_CITY, payload: response.data });
    } catch(e) {
        dispatch({ type: FETCH_CITY_ERROR, payload: 'Something bad happened' });
    }
}
