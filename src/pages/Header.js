import React from 'react';
import { Link } from 'react-router';
import { LoginLink, LogoutLink, Authenticated, NotAuthenticated } from 'react-stormpath';

export default class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container-fluid overwrite-padding">
          <div id="navbar-collapse" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li><Link to="/">Home</Link></li>
              <Authenticated>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
              </Authenticated>
            </ul>

            <div className="pull-right">
            <form className="form-search" method="get" action="#">
           <input type="search" name="search" placeholder="Search campaign ,patient ,doctors.."/>
           <button type="submit">Search</button>
           <i className="fa fa-search"></i>
       </form>
       </div>
       <ul className="nav navbar-nav navbar-right" style={{marginRight:"15px"}}>
           <NotAuthenticated>
             <li>
               <LoginLink />
             </li>
           </NotAuthenticated>
           <NotAuthenticated>
             <li>
               <Link to="/register">Create Account</Link>
             </li>
           </NotAuthenticated>
           <Authenticated>
             <li>
               <LogoutLink />
             </li>
           </Authenticated>
       </ul>
          </div>
        </div>
      </nav>
    );
  }
}
