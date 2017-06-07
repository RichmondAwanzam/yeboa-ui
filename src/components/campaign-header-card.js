import React, { Component } from 'react';
import { Link } from 'react-router';
export default class CampaignHeaderCard extends Component {



    render() {
        return (
            <div className="user-card"><div className="g-row g-cont">
                <div className="g-col">
                    <h1 className="user-card__title">{this.props.title}</h1>
                    
                </div></div>

                <div className="g-row row g-cont user-stats">
                    <div className=" col-md-3">
                        <span className="user-stats__label active">Donated</span>
                        <div className="user-stats__value"><span>GHS {this.props.amountDonated}</span></div>
                         <Link to="donate" className="btn btn-primary pull-right">Donate</Link>
                    </div>
                    <div className=" col-md-3">
                        <span className="user-stats__label">Endorses</span>
                        <div className="user-stats__value"><span>{this.props.totalEndorsed}</span></div>
                         <Link to="" className="btn btn-primary pull-right">Endorse</Link>
                    </div>
                    <div className="  col-md-3">
                        <div className="user-stats__label">Followers</div>
                        <div className="user-stats__value"><span>{this.props.totalFollowing}</span></div>
                         <Link to="" className="btn btn-primary pull-right">Follow</Link>
                    </div>

                </div>

            </div>
        );
    }
}

