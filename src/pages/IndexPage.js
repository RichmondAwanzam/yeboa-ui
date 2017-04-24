import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { React_Bootstrap_Carousel } from 'react-bootstrap-carousel';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HelpeeCardView from '../widgets/helpee/helpee-card-view';
import { Tabs, Tab } from 'material-ui/Tabs';
import FeaturedPatientsContainer from '../containers/FeaturedPatientsContainers';
const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

const bgs0 = ['#f44c67', '#008080', '#00abe5'];
const bgs100 = ['#fb377f', '#008b8b', '#0098cc'];
const pathfill = ['#ffd9df', '#00eeee', '#00bfff'];
class IndexPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      background0: bgs0[0],
      background100: bgs100[0],
      bgPath: pathfill[0]
    }
  }

  onSelect(active, direction) {

    console.log(`active=${active} && direction=${direction}`);
    this.setState({ background0: bgs0[active], background100: bgs100[active], bgPath: pathfill[active] });
  }

  render() {
    return (

      <div>
        <div className="bg">
          <div className="bottom">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2400 708" preserveAspectRatio="none">
              <path fill={this.state.bgPath} d="M0.5,80.5l2400-80v628l-2400,80V80.5Z" />
            </svg></div>
          <div className="top">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2400 708" preserveAspectRatio="none">
              <defs>
                <linearGradient id="gradient_color" gradientTransform="rotate(90)">
                  <stop offset="0%" stopColor={this.state.background0} />
                  <stop offset="100%" stopColor={this.state.background100} />
                </linearGradient>
              </defs>
              <path fill={this.state.bgPath} d="M0,140L2400,0V568L0,708V140Z" />
            </svg>
          </div>
        </div>
        <React_Bootstrap_Carousel animation={true} className="carousel-fade" onSelect={this.onSelect.bind(this)}>

          <div className="info-box" style={{ height: 270, width: "400px", margin: "15px auto", color: "#fb377f" }}>
            <h2>GHC 44000 in Cash</h2>
            Join the train
      </div>
          <div className="info-box" style={{ height: 270, width: "400px", margin: "15px auto", color: "#008b8b" }}>
            <h2>345 Patients</h2>
            Getting help
      </div>
          <div className="info-box" style={{ height: 270, width: "400px", margin: "15px auto", color: "#0098cc" }}>
            <h2>15 Doctors Registered</h2>
            Providing Health and Medical Tips
      </div>
        </React_Bootstrap_Carousel>

        <div className="container">
          <div className="start-compaign-container">
            <Link to="new-campaign" className="btn btn-primary">Start Patient Campaign</Link>
          </div>
          
            <Tabs value={this.state.value} onChange={this.handleChange} className="material-class" >
              <Tab label="Featured Patients" value="a">
                <div className="row">
                  <div className="col-md-12 col-xs-12 padding-20">

                    <FeaturedPatientsContainer {...this.props} />
                  </div>

                </div>
              </Tab>
              <Tab label="New" value="b">

              </Tab>
              <Tab label="Most Followed" value="c">

              </Tab>
              <Tab label="Top Donors" value="d">

              </Tab>
            </Tabs>
    

        </div>
      </div>

    );
  }
}

function mapStateToProps(state) {
  const { authed, environment, navigator, patients } = state;
  const { height } = environment;

  const { query } = navigator.route;


  return {
    authed,
    height,
    patients
  };
}
export default connect(mapStateToProps)(IndexPage)
