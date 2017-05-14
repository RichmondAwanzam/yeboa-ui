
import React from 'react';
import {Field,reduxForm} from 'redux-form';
import {createPatientCampaign}  from '../actions/PatientsActions';
import {connect} from 'react-redux';
import WizardForm from '../widgets/form-wizard';

 class PatientCampaignPage extends React.Component {
   onSubmit(props){
    
     const {dispatch} = this.props;
     //dispatch createPatientPatient  return id of campaign created
     console.log("i will create camapign");
     console.log(dispatch);
     dispatch(createPatientCampaign(props));
   }


  render() {
    return (<div>
      <WizardForm onSubmit={this.onSubmit.bind(this)}/>
     
      </div>);
  }
}



export default connect()(PatientCampaignPage);
