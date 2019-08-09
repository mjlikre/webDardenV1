import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import  './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// Import Containers
import Home from './containers/Home'
import App from './containers/App.jsx';
import Profile from './containers/Profile';
import Stuff from './containers/Stuff';
import UserDestination from './components/UserDestination'
import Signin from './containers/Signin';
import Signout from './containers/Signout';
import Todo from './containers/Todo';
import GuideLocation from './components/GuideLocation'
import Signup from './containers/Signup'


import UserSignup from './components/Signup/Signup'

import 'bootstrap/dist/css/bootstrap.min.css'


// Import components
import ContactUs from './components/ContactUs';
import reducers from './reducers';
import Search from './components/Search';
// configure redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  {
    auth: { authenticated: localStorage.getItem('token')}
  },
  composeEnhancers(applyMiddleware(reduxThunk))
);


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <Route exact path='/' component={Home}/>
        <Route exact path='/search' component={Search}/>
        <Route exact path='/profile' component={Profile}/>
        <Route exact path='/stuff' component={Stuff}/>
        <Route exact path='/signin' component={Signin}/>
        <Route exact path='/signout' component={Signout}/>
        <Route exact path='/signup' component={Signup}/>
        <Route exact path='/usersignup' component={UserSignup}/>
        <Route exact path='/todo' component={Todo}/>
        <Route exact path='/contactus' component={ContactUs}/>
        <Route exact path='/guideloc' component={GuideLocation}/>
        <Route exact path='/destinationr' component={UserDestination}/>

        <Route exact path='/usersignup' component={UserSignup}/>


      </App>
    </Router>
  </Provider>, 
  document.getElementById('root'));
