
import React from 'react';
import {Link} from 'react-router';

export default class PatientPage extends React.Component {
  render() {
    return (<div>
          <article className="user-card"><div className="g-row g-cont">
          <div className="g-col">
          <h1 className="user-card__title">Patient Name</h1>
          <Link to="donate" className="btn btn-primary pull-right">Donate</Link>
          </div></div>

          <div className="g-row row g-cont user-stats">
                <div className=" col-md-3">
                  <a className="user-stats__label active" href="/users/632699/tracks">Donated</a>
                  <div className="user-stats__value"><span>GHS 242</span></div>
                </div>
                <div className=" col-md-3">
                  <a className="user-stats__label" href="/users/632699/likes">Endorses</a>
                  <div className="user-stats__value"><span>97</span></div>
                </div>
                <div className="  col-md-3">
                  <div className="user-stats__label">Followers</div>
                  <div className="user-stats__value"><span>29,980</span></div>
                </div>
                <div className=" col-md-3">
                  <div className="user-stats__label">Following</div>
                  <div className="user-stats__value"><span>135</span></div>
                </div>
            </div>

          </article>

          <div className="container">
          <div className="row">
          <div className="col-md-6 ">
            <div className="text-content-area">
                  Doctors Tips

          <ul className="media-list">
                  <li className="media">
                    <a className="pull-left" href="#">
                      <img className="media-object img-circle" src="https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg" alt="profile"/>
                    </a>
                    <div className="media-body">
                      <div>
                          <h4 className="media-heading text-uppercase reviews">Marco </h4>
                          <span className="media-date text-uppercase reviews list-inline">
                          12 mins ago
                          </span>
                          <p className="media-comment">
                            Great snippet! Thanks for sharing.
                          </p>
                      </div>
                      </div>
                      </li>
                      <li className="media">
                        <a className="pull-left" href="#">
                          <img className="media-object img-circle" src="https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg" alt="profile"/>
                        </a>
                        <div className="media-body">
                          <div>
                              <h4 className="media-heading text-uppercase reviews">Marco </h4>
                              <span className="media-date text-uppercase reviews list-inline">
                              12 mins ago
                              </span>
                              <p className="media-comment">
                                Great snippet! Thanks for sharing.
                              </p>
                          </div>
                          </div>
                          </li>
            </ul>
                <div style={{width:'100%'}}>
                    <div className="pull-left" style={{width:'85%'}}>
                      <input type="text" className="comment-textbox" placeholder="Enter comment here" />
                    </div>
                    <div className="pull-right" style={{width:'15%'}}>
                      <button className="btn btn-primary flatbutton">
                          Add Tip
                      </button>
                    </div>
                </div>
          </div>
          </div>
          <div className="col-md-6 ">
              <div className="text-content-area">
                Comments
                <ul className="media-list">
                        <li className="media">
                          <a className="pull-left" href="#">
                            <img className="media-object img-circle" src="https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg" alt="profile"/>
                          </a>
                          <div className="media-body">
                            <div>
                                <h4 className="media-heading text-uppercase reviews">Marco </h4>
                                <span className="media-date text-uppercase reviews list-inline">
                                12 mins ago
                                </span>
                                <p className="media-comment">
                                  Great snippet! Thanks for sharing.
                                </p>
                            </div>
                            </div>
                            </li>
                            <li className="media">
                              <a className="pull-left" href="#">
                                <img className="media-object img-circle" src="https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg" alt="profile"/>
                              </a>
                              <div className="media-body">
                                <div>
                                    <h4 className="media-heading text-uppercase reviews">Marco </h4>
                                    <span className="media-date text-uppercase reviews list-inline">
                                    12 mins ago
                                    </span>
                                    <p className="media-comment">
                                      Great snippet! Thanks for sharing.
                                    </p>
                                </div>
                                </div>
                                </li>
                  </ul>
                  <div style={{width:'100%'}}>
                      <div className="pull-left" style={{width:'85%'}}>
                        <input type="text" className="comment-textbox" placeholder="Enter comment here" />
                      </div>
                      <div className="pull-right" style={{width:'15%'}}>
                        <button className="btn btn-primary flatbutton">
                            Comment
                        </button>
                      </div>
                  </div>
              </div>
          </div>
          </div>
          </div>
      </div>);
  }
}
