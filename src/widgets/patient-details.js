import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from '../utils/forms/validate'
import renderField from '../utils/forms/renderfield'

const PatientDetailsForm = (props) => {
  const { handleSubmit } = props
  return (
    <form className="form-labels-on-top" onSubmit={handleSubmit}>

      <div className="form-title-row">
                <h1>New Patient Details</h1>
            </div>
        <Field name="amount" type="text" component={renderField} label="Amount Needed"/>
        <Field name="title" type="text" component={renderField} label="Campaign Title"/>
        <Field name="name" type="text" component={renderField} label="Patient Name"/>
      
        <Field name="desc" type="textarea" component={renderField} label="Campaign Description"/>
       <div>
        <button type="submit" className="next pull-right">Next</button>
        <div className="clearfix"/>
      </div>
    </form>
  ) 
}

export default reduxForm({
  form: 'wizard',                 // <------ same form name
  destroyOnUnmount: false,        // <------ preserve form data
  forceUnregisterOnUnmount: true,  // <------ unregister fields on unmount
  validate
})(PatientDetailsForm)
