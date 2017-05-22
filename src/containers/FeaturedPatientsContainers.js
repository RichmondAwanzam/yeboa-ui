import React, { Component } from 'react';
import { connect } from 'react-redux';
import PatientsView from '../components/PatientViews';



class FeaturedPatientsContainer extends Component {

  componentWillMount(){
    const{ authed, campaigns,height } = this.props;
  }

  renderFeaturedPatients(){
  //  this.patients.map((patient) => {
  //    return <PatientsView key={patient.id}   {...patient} />
  //  });
  }
  render() {
return(
     <PatientsView   {...this.props}/>

);
}
}


function mapStateToProps(state) {
  const { dispatch,authed, campaigns ,environment} = state;

  const { height } = environment;
  return {
    authed,
    height,
    campaigns
  };
}

export default connect(mapStateToProps)(FeaturedPatientsContainer);
