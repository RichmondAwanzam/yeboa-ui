
import React, { Component } from 'react';
import renderComment from '../utils/forms/render-comment-input';
import { Field, reduxForm } from 'redux-form';
import { postCampaignComments } from '../actions/campaignsActions'
class CreateComment extends Component {
constructor(props){
    super(props);
}

    handleSubmit(data) {
        console.log(data);
     
        const { dispatch, campaignId, userId } = this.props;
          console.log(campaignId ,userId);
        dispatch(postCampaignComments(data.comment, campaignId, userId, this.props.type))
    }
    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;
        return (
            <div style={{ width: '100%' }}>
                <form onSubmit={handleSubmit(this.handleSubmit.bind(this))}>
                    <Field name="comment" type="text" component={renderComment} label="Enter Comment here" />
                    <div className="pull-right" style={{ width: '15%' }}>
                        <button className="btn btn-primary flatbutton" disabled={pristine || submitting} type="submit">
                            Comment
                      </button>
                    </div>
                </form>
            </div>
        );
    }
}
export default reduxForm({
    form: 'comment'

})(CreateComment)

