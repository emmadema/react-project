import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import {Router, browserHistory} from 'react-router';
import routes from './config/routes.js';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

//telling react dom to render the rputer on to the page
ReactDOM.render(
	//pulling in properties of the router
  <Router routes={routes} history={browserHistory}/>,
  document.getElementById('root')
);