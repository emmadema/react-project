// src/config/routes.js
//import react
import React from 'react';
//need route libiary from react 
import {Route} from 'react-router';
//going to route all components through app.js
import App from '../App';
//importing todos container
import TodosContainer from '../containers/TodosContainer';

export default (
  <Route path='/' component={App}>
  	<Route path='/todos' component={TodosContainer}/>
  </Route>
)