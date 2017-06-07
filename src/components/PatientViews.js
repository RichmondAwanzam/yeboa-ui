import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import HelpeeCardView from '../widgets/helpee/helpee-card-view';
import { fetchCampaigns } from '../actions/campaignsActions';

class PatientsView extends Component {

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(fetchCampaigns());
  }
  renderDOMPatients() {
    const { campaigns } = this.props;

    if (campaigns.length > 0) {
      return campaigns.map(item => {
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
  const { patientCampaigns } = state;
  const { campaigns } = patientCampaigns;
  console.log(campaigns);
  return {

    campaigns
  };
}

export default connect(mapStateToProps)(PatientsView);
