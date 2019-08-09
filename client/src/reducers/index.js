import { combineReducers } from "redux";
import { reducer as form } from 'redux-form';
import auth from './auth';
import todo from './todo';
import user from './guide'
import location from './location'
import searchReducer from "./searchReducer";
import matchReducer from "./matchReducer";
import fetchU from './fetchUserReducer';



export default combineReducers({
  auth,
  form,
  todo,
  user,
  location,
  searchReducer,
  matchReducer,
  fetchU

});