import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from '../utils/forms/validate'
import renderField from '../utils/forms/renderfield'


const renderError = ({ meta: { touched, error } }) => touched && error ?
  <span>{error}</span> : false

const PatientHealthDetailsForm = (props) => {
  const { handleSubmit, previousPage } = props
  return (
    <form className="form-labels-on-top" onSubmit={handleSubmit}>
        <div className="form-title-row">
                <h1>Patient Medical Condition</h1>
            </div>
      <Field name="diagnosis" type="text" component={renderField} label="Diagnosis"/>
      <Field name="condition" type="textarea" component={renderField} label="Patient Condition"/>
      <div>
        <button type="button" className="previous" onClick={previousPage}>Previous</button>
        <button type="submit" className="next">Next</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'wizard',  //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,  // <------ unregister fields on unmount
  validate
})(PatientHealthDetailsForm)
