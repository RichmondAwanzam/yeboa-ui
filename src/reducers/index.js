import { combineReducers } from 'redux';
import patientCampaigns from './campaigns';
import environment from './environment';
import navigator from './navigator';
import authed from './authed';
import { reducer as formReducer } from 'redux-form';
import { routerReducer} from 'react-router-redux'
const rootReducer = combineReducers({
  environment,
  navigator,
  patientCampaigns,
  authed,
  form:formReducer,
  routing: routerReducer
});

export default rootReducer;
