import 'babel-polyfill';
import 'fastclick';
import 'isomorphic-fetch';
import { MasterPage, IndexPage, LoginPage, RegistrationPage, ProfilePage } from './pages';
import ReactStormpath, { Router, HomeRoute, LoginRoute, AuthenticatedRoute } from 'react-stormpath';
import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';
import {  IndexRoute, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import injectTapEventPlugin from 'react-tap-event-plugin';


injectTapEventPlugin();
ReactStormpath.init();



const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('app-container')
);
