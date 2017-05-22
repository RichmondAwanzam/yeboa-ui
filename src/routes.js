import { MasterPage, LoginPage, RegistrationPage, ProfilePage,PatientPage,PatientCampaignPage ,DonatePage ,ConfirmationPage,AccountSettingsPage } from './pages';
import IndexPage from './pages/IndexPage'
import ReactStormpath, { Router, HomeRoute, LoginRoute, AuthenticatedRoute } from 'react-stormpath';
import React from 'react';
import ReactDOM from 'react-dom';
import {  IndexRoute, Route, browserHistory } from 'react-router';
export default (
  <Router history={browserHistory}>
  <HomeRoute path='/' component={MasterPage}>
      <IndexRoute component={IndexPage} />
      <LoginRoute path='/login' component={LoginPage} />
      <Route path='/register' component={RegistrationPage} />
      <Route path='/campaigns/:campaignId' component={PatientPage} />
      <Route path='/new-campaign' component={PatientCampaignPage} />
      <Route path='/donate' component={DonatePage} />
      <Route path='/confirm' component={ConfirmationPage} />
      <Route path='settings' component={AccountSettingsPage}/>
      <AuthenticatedRoute>
    <HomeRoute path='/profile' component={ProfilePage} />
  </AuthenticatedRoute>
    </HomeRoute>
  </Router>
);
