import { AUTH_USER, AUTH_ERROR, ADD_TODO, TODO_ERROR, FETCH_TODOS, FETCH_USER, USER_ERROR} from "./types";
import axios from 'axios';

export const userSignup = (formProps, callback) => async dispatch => {
  console.log(formProps)
  try {
    const res = await axios.post('/api/auth/user', formProps);
    dispatch({ type: AUTH_USER, payload: res.data.token });
    localStorage.setItem('token', res.data.token);
    callback();
  } catch(e) {
    dispatch({ type: AUTH_ERROR, payload: 'Email in use' });
  }
};

export const guideSignup = (formProps, callback) => async dispatch => {

  try {
    const res = await axios.post('/api/auth/signup', formProps);
    dispatch({ type: AUTH_USER, payload: res.data.token });
    localStorage.setItem('token', res.data.token);
    callback();
  } catch(e) {
    dispatch({ type: AUTH_ERROR, payload: 'Email in use' });
  }
};


export const signin = (formProps, callback) => async dispatch => {
  try {
    const res = await axios.post('/api/auth/signin', formProps);
    dispatch({ type: AUTH_USER, payload: res.data.token });
    localStorage.setItem('token', res.data.token);
    callback();
  } catch(e) {
    dispatch({ type: AUTH_ERROR, payload: 'Invalid login credentials' });
  }
};



export const signout = () => {
  localStorage.removeItem('token');
  return {
    type: AUTH_USER,
    payload: ''
  };
};


export const fetchUser = () => async dispatch => {
  console.log("hey")
  try {
    const response = await axios.get('/api/user', {
      headers: { authorization: localStorage.getItem('token')}
    });

    dispatch({ type: FETCH_USER, payload: response.data.user });
  } catch(e) {
    dispatch({ type: USER_ERROR, payload: 'Something bad happened' });
  }
}

export const addTodo = formValue => async dispatch => {
  try {
    await axios.post('/api/todo', formValue, {
      headers: { authorization: localStorage.getItem('token') }
    });

    const todos = await axios.get('/api/todo', {
      headers: { authorization: localStorage.getItem('token')}
    });

    console.log("Testing");

    dispatch({ type: ADD_TODO, payload: todos.data.todos});
  } catch(e) {
    dispatch({ type: TODO_ERROR, payload: 'Something went wrong'});
  }
};

export const fetchTodos = () => async dispatch => {
  try {
    const response = await axios.get('/api/todo', {
      headers: { authorization: localStorage.getItem('token')}
    });

    dispatch({ type: FETCH_TODOS, payload: response.data.todos });
  } catch(e) {
    dispatch({ type: TODO_ERROR, payload: 'Something bad happened' });
  }
}







