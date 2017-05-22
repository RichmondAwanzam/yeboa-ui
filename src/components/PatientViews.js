import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import HelpeeCardView from '../widgets/helpee/helpee-card-view';
import { fetchCampaigns } from '../actions/campaignsActions';

class PatientsView extends Component {

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(fetchPatients());
  }
  renderDOMPatients() {
    const { items } = this.props;

    if (items.length > 0) {
      return items.map(item => {
        return (
          <HelpeeCardView key={item.id} campaign={item} />);

      });
    } else {
      return null;
    }




  }


  render() {
    return (
      <div className="row">
        {this.renderDOMPatients()}
      </div>
    );
  }
}


function mapStateToProps(state) {
  const { campaigns } = state;
  const { items } = campaigns;
  console.log("finally");
  console.log(items);
  return {

    items
  };
}

export default connect(mapStateToProps)(PatientsView);
