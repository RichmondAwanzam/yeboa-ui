import React, { PropTypes } from 'react';
import {Link} from 'react-router';
import {SERVER_URL} from '../../constants/Config'
export default class HelpeeCardView extends React.Component {

  campaignClicked(){
    var id=this.props.campaign.id;
  }
  render() {
    return (<div className="col-md-4 col-sm-6" onClick={this.campaignClicked.bind(this)} style={{height:"350px"}}>
      <Link to={"campaigns/"+this.props.campaign.id}>
            		<span className="thumbnail">
              			<img src={SERVER_URL+(((this.props.campaign)||{}).coverImageUrl)} style={{height:"200px" ,width:"330px"}} alt="..."  />
              			<h4>{this.props.campaign.title}</h4>
              			<div className="ratings">
                            <span className="">{this.props.campaign.totalFollowing} following</span> &nbsp;|&nbsp;
                            <span className="">{this.props.campaign.totalEndorsed} endorses</span> &nbsp;|&nbsp;
                            <span className="">{this.props.campaign.numberOfDonors} donors</span>
                    </div>
              			<hr className="line"/>
              			<div className="row">
              				<div className="col-md-6 col-sm-6">
              					<span className="price">{this.props.campaign.amountDonated} <small>of {this.props.campaign.target}</small></span>
              				</div>
              				<div className="col-md-6 col-sm-6">
              					<button className="btn btn-info right" > Donate</button>
              				</div>
              			</div>
            		</span>
                </Link>
    		    </div>
  );
  }
}
