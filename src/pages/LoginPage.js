import React from 'react';
import DocumentTitle from 'react-document-title';
import { LoginForm } from 'react-stormpath';
import LoginComponent from '../components/login-component';
import {connect} from 'react-redux';
 class LoginPage extends React.Component {

   
  render() {
    return (
      <DocumentTitle title={`Login`}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h3>Login</h3>
              <hr />
            </div>
          </div>
         <LoginComponent  />
        </div>
      </DocumentTitle>
    );
  }
}
function mapStateToProps(state){
return{}
}
export default connect(mapStateToProps)(LoginPage);



