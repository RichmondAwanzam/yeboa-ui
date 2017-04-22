import { combineReducers } from 'redux';
import patients from './patients';
import environment from './environment';
import navigator from './navigator';
import authed from './authed';
import { reducer as formReducer } from 'redux-form';
const rootReducer = combineReducers({
  environment,
  navigator,
  patients,
  authed,
  form:formReducer
});

export default rootReducer;
