

import React, { Component } from 'react';
import CommentView from '../widgets/comment';
export default class CommentsView extends Component {

renderCommentsData(){
   return this.props.data.map( comment=>{
       return  (<li key={comment.id} className="media">
                    <CommentView data={comment}/>
                </li>);
   })
}

    render() {
        return (
            <ul className="media-list">
                {this.renderCommentsData()}
            </ul>
        );
    }
}


