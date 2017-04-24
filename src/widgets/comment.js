import React, { PropTypes } from 'react';

export default class CommentView extends React.Component {


    render() {
        return (
            <div>
                <a className="pull-left" href="#">
                    <img className="media-object img-circle" src="https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg" alt="profile" />
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
            </div>
        );
    }
}
