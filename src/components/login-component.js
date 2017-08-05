import React from 'react';
import { Field, reduxForm } from 'redux-form'
import validate from '../utils/forms/validate'
import renderField from '../utils/forms/renderfield';
import {loginUser} from '../actions/AuthedActions';

class LoginComponent extends React.Component {

    onSubmit(formData){
    
     const {dispatch} = this.props;
     dispatch(loginUser(formData));
   }
  render() {
      const { handleSubmit } = this.props;
    return (
    <div>

          <form className="form-labels-on-top" onSubmit={handleSubmit(this.onSubmit.bind(this))}>

        
            <Field name="email" type="text" component={renderField} label="Email / Number" />
            <Field name="password" type="text" component={renderField} type="password" label="Password" />
         
            <div>
              <button type="submit" className="next pull-right">Login</button>
              <div className="clearfix" />
            </div>
          </form>
        </div>
     
    );
  }
}

export default reduxForm({
  form: 'login',                 // <------ same form name

})(LoginComponent)
