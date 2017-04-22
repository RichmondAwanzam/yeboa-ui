
import React from 'react';
import {Field,reduxForm} from 'redux-form';
import {createPatientCampaign}  from '../actions/PatientsActions';
import {connect} from 'react-redux';

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className="form-row">
    <label>
    <span>{label}</span>
    {type==="textarea" ? <textarea></textarea>:<input {...input} placeholder={label} type={type}/>}


    {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}

    </label>


  </div>


)

 class PatientCampaignPage extends React.Component {


   onSubmit(props){
    
     const {dispatch} = this.props;
     //dispatch createPatientPatient  return id of campaign created
     dispatch(createPatientCampaign(props));
   }


  render() {
    const {fields :{title,name,desc},handleSubmit}= this.props;
    return (<div>
      <form className="form-labels-on-top" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
      <div className="form-title-row">
                <h1>New Patient Campaign</h1>
            </div>
        <Field name="title" type="text" component={renderField} label="Campaign Title"/>
        <Field name="name" type="text" component={renderField} label="Patient Name"/>
        <Field name="email" type="text" component={renderField} label="Email"/>
        <Field name="confirm-email" type="text" component={renderField} label="Confirm Email"/>
        <Field name="desc" type="textarea" component={renderField} label="Campaign Description"/>
        <Field name="images" type="file" component={renderField} label="Pictures"/>
        <div className="form-group">
          <button  className="btn btn-primary" type="submit">Submit</button>
        </div>
      </form>
      </div>);
  }
}

//passsed to redux-form to handle form validation
const validate = values => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Required'
  } else if (values.name.length > 15) {
    errors.name = 'Must be 15 characters or less'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  return errors
}

export default reduxForm({
  form:'patientCampaign',
  fields:['title','name','desc'],
  validate
})(connect()(PatientCampaignPage));
