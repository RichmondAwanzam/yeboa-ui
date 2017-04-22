import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import HelpeeCardView from '../widgets/helpee/helpee-card-view';
import {fetchPatients} from '../actions/PatientsActions';

 class PatientsView extends Component {

componentWillMount(){
  const { dispatch } = this.props;
  dispatch(fetchPatients());
}
renderDOMPatients(){
  const {items} = this.props;

if (items.length >0) {
  return  items.map(item=>{
      return   (
        <HelpeeCardView  key={item.id} patient={item}/>);

    });
}else{
  return null;
}




  }


  render(){
  return (
    <div>
   {this.renderDOMPatients()}
   </div>
  );
}
}


function mapStateToProps(state) {
  const { patients } = state;
const {items} =patients;
console.log("finally");
console.log(items);
  return {

  items
  };
}

export default connect(mapStateToProps)(PatientsView);
