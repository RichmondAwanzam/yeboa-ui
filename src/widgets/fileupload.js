import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from '../utils/forms/validate'
import renderFile from '../utils/forms/renderFile'
import { Link } from 'react-router';
import { PropTypes } from 'prop-types';
import {uploadCampaignMedias} from '../actions/campaignsActions'
class FileUpload extends React.Component {
    constructor(props) {
        super(props);
        this.handleImageChange.bind(this);
        this.state = { clicked: false };
    }

    onFormSubmit(data) {
        console.log("foem will subit");
         const {dispatch} = this.props;
       for(var i=0;i<data.images.length;i++){
           console.log(data.images[i]);
             dispatch(uploadCampaignMedias(this.props.campaignId,data.images[i]));
       }
    }

    triggerImageUpload(e) {
        console.log(this.refs.uploader);
        this.refs.uploader.click();
        this.setState({ clicked: true });

    }


    handleImageChange(e) {
        e.preventDefault();
       // this.refs.submitBtn.click();
    }
    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onFormSubmit.bind(this))}>
               
                <Field name="images" ref="uploader" multiple clicked={this.state.clicked} onChange={this.handleImageChange.bind(this)} component="input" type="file" />

                <button ref="submitBtn" type="submit" >Upload</button>
            </form>
        )
    }
}

export default reduxForm({
    form: 'fileupload'

})(FileUpload)
