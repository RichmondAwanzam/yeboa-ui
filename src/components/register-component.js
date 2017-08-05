import React from 'react';
import { Field, reduxForm } from 'redux-form'
import validate from '../utils/forms/validate'
import renderField from '../utils/forms/renderfield'
export  class RegisterComponent extends React.Component {

     onSubmit(formData){
    
     const {dispatch} = this.props;
  
   }
  render() {
      const { handleSubmit } = this.props;
    return (
    <div>

          <form className="form-labels-on-top" onSubmit={handleSubmit(this.onSubmit.bind(this))}>

            <Field name="name" type="text" component={renderField} label="Full Name" />
            <Field name="email" type="text" component={renderField} label="Email" />
            <Field name="phone" type="text" component={renderField} label="Phone Number" />
            <Field name="password" type="text" component={renderField} type="password" label="Password" />
            <Field name="cpassword" type="text" component={renderField} type="password" label="Confirm Password" />
            <div>
              <button type="submit" className="next pull-right">Register</button>
              <div className="clearfix" />
            </div>
          </form>
        </div>
     
    );
  }
}

export default reduxForm({
  form: 'login',                 // <------ same form name
  destroyOnUnmount: false,        // <------ preserve form data
  forceUnregisterOnUnmount: true,  // <------ unregister fields on unmount
  validate
})(RegisterComponent)
