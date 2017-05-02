import React from 'react';
import { Link } from 'react-router';
import { LoginLink, LogoutLink, Authenticated, NotAuthenticated } from 'react-stormpath';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
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
                <input type="search" name="search" placeholder="Search campaign ,patient ,doctors.." />
                <button type="submit">Search</button>
                <i className="fa fa-search"></i>
              </form>
            </div>

            <ul className="nav navbar-nav navbar-right" style={{ marginRight: "15px" }}>
              <NavDropdown eventKey={3} title={<i className="fa fa-bell-o yeboa-15x" aria-hidden="true"></i>} id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Kofi osei,Yaw Opoko has donated in your campaign</MenuItem>
                <MenuItem eventKey={3.2}>Dr Kojo Ofori endorsed your camapign</MenuItem>
                <MenuItem eventKey={3.3}>Peter Pan and Yaw menu are following your campaign</MenuItem>
                <MenuItem eventKey={3.4}>Kofi Manu commented on your camapign</MenuItem>
                <MenuItem eventKey={3.5}>You have new medical tips</MenuItem>
              </NavDropdown>
              <li>
                  <Link to="/settings"><i className="fa fa-cog yeboa-15x" aria-hidden="true"></i></Link>
                </li>
                <li>
                  <Link to="/settings">Endorsement Requests</Link>
                </li>
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
      </nav >
    );
  }
}
