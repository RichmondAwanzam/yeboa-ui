import React, { PropTypes } from 'react';
import {Link} from 'react-router';
export default class HelpeeCardView extends React.Component {

  patientClicked(){
    var id=this.props.patient.id;
  }
  render() {
    return (<div className="col-md-4 col-sm-6" onclick={this.patientClicked.bind(this)}>
      <Link to={"patients/"+this.props.patient.id}>
            		<span className="thumbnail">
              			<img src="http://www.nursetogether.com/sites/default/files/4-ways-difference-in-patient-care-article.jpg" alt="..."/>
              			<h4>{this.props.patient.name}</h4>
              			<div className="ratings">
                            <span className="">17 following</span> &nbsp;|&nbsp;
                            <span className="">15 endorses</span> &nbsp;|&nbsp;
                            <span className="">5 donors</span>

                    </div>
              			<p>Emmanuel has been ill and needs moeny for surgery </p>
              			<hr className="line"/>
              			<div className="row">
              				<div className="col-md-6 col-sm-6">
              					<p className="price">$29,90 <small>of 10000</small></p>
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
