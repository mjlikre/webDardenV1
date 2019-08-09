import { USER_ERROR, FETCH_USER } from "../actions/types";

const INITIAL_STATE = {
  email: '',
  age: '',
  yearsOfExperience: '',
  activities: '',
  city: '',
  aboutMe: '',
  photoLink: '',
  errorMessage: ''
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case USER_ERROR:
      console.log(action.payload)
      return {...state, errorMessage: action.payload };
    case FETCH_USER:
      return {...state, email: action.payload.email, age: action.payload.age, yearsOfExperience: action.payload.yearsOfExperience, activities: action.payload.activities,
       city: action.payload.city, aboutMe: action.payload.aboutMe, photoLink: action.payload.photoLink};
    default:
      return state;
  }
}