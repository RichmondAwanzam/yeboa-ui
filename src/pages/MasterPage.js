import React,{PropTypes} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { LoginLink } from 'react-stormpath';
import DocumentTitle from 'react-document-title';
import  {initNavigator} from '../actions/NavigatorActions';
import {initEnvironment} from '../actions/EnvironmentActions'
import Header from './Header';

const propTypes = {
  dispatch: PropTypes.func.isRequired
};

 class MasterPage extends React.Component {

  componentDidMount() {

    const { dispatch } = this.props;
    console.log(dispatch);
    dispatch(initNavigator());
    dispatch(initEnvironment());
  }

  render() {
    return (
      <DocumentTitle title='Yeboa - App'>
        <div className='MasterPage'>
          <Header />
          {this.props.children}
        </div>
      </DocumentTitle>
    );
  }
}

MasterPage.propTypes = propTypes;

function mapStateToProps(state) {
  const { environment, navigator } = state;
  const { height, width } = environment;
  const { path } = navigator.route;

  return {
    height,
    path,
    width
  };
}


export default connect(mapStateToProps)(MasterPage);
