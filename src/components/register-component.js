import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { validateRegistration } from '../utils/forms/validate'
import renderField from '../utils/forms/renderfield';
import { registerUser, checkUserExistences } from '../actions/AuthedActions'
import {connect} from 'react-redux';
import asyncValidate from '../actions/asyncValidate'
export class RegisterComponent extends React.Component {

  onSubmit(formData) {
    const { dispatch } = this.props;
    dispatch(registerUser(formData));
  }
 
  checkExistences(type, e) {
    
    // const value = e.target.value;
    // if(value.length!=12) return;
    // if (this.running) return;
    // setTimeout(() => {
      
    //   const { dispatch } = this.props;
    //   this.running = true;
    //   dispatch(checkUserExistences(value, type));
    // }, 500)

  }
  render() {
      const { handleSubmit, pristine, submitting } = this.props;
    return (
      <div>

        <form className="form-labels-on-top" onSubmit={handleSubmit(this.onSubmit.bind(this))}>

          <Field name="name" type="text" component={renderField} label="Full Name" />
          <Field name="email" type="text" component={renderField} label="Email" onChange={this.checkExistences.bind(this, "email")} />
          <Field name="msisdn" type="text" component={renderField} label="Phone Number" onChange={this.checkExistences.bind(this, "msisdn")} />
          <Field name="password" type="text" component={renderField} type="password" label="Password" />
          <Field name="cpassword" type="text" component={renderField} type="password" label="Confirm Password" />
          <div>
            <button type="submit" className="next pull-right" disabled={pristine || submitting}>Register</button>
            <div className="clearfix"/>
          </div>
        </form>
      </div>

    );
  }
}
 function mapStateToProps(state){
   const {userExists} =state.authed;
   console.log('Users exist',userExists);
     return {
        userExists
     }
 }
 RegisterComponent = connect(mapStateToProps)(RegisterComponent);
export default reduxForm({
  form: 'register',
  validate:validateRegistration,
  asyncValidate,
  asyncBlurFields: ['email','msisdn']
})(RegisterComponent)
