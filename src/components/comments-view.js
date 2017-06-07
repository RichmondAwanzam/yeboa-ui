

import React, { Component } from 'react';
import CommentView from '../widgets/comment';
export default class CommentsView extends Component {
    render() {
        return (
            <ul className="media-list">
                <li className="media">
                    <CommentView />
                </li>
                <li className="media">
                    <CommentView />
                </li>
            </ul>
        );
    }
}


