import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from '../utils/forms/validate'
import renderField from '../utils/forms/renderfield'


class PatientMiscellanousForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { file: "", imagePreviewUrl: "" };
        this.handleImageChange.bind(this);
    }

    handleImageChange(e) {
        e.preventDefault();
        let reader = new FileReader();
        let comp = this;
        let file = e.target.files[0];
        console.log(file);
        reader.onloadend = () => {
            console.log("i have finished reading file");
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }
        reader.readAsDataURL(file)
    }
    render() {
         console.log("rendering image step")
        const { handleSubmit, pristine, previousPage, submitting } = this.props;
        let { imagePreviewUrl } = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            console.log("Image is shown @ "+imagePreviewUrl)
            $imagePreview = (<img src={imagePreviewUrl} height="200px" width="300px"/>);
        }
        return (
            <form className="form-labels-on-top" onSubmit={handleSubmit}>
                <div className="form-title-row">
                    <h1>Patient  Add-ons and Media</h1>
                </div>
                <Field name="images" type="file" onChange={this.handleImageChange.bind(this)} component={renderField} label="Campaign Cover Image" />
               <div>{$imagePreview}</div>
                <div>
                    <button type="button" className="previous" onClick={previousPage}>Previous</button>
                    <button type="submit" disabled={pristine || submitting}>Submit</button>
                </div>
            </form>
        )
    }
}
export default reduxForm({
    form: 'wizard', //Form name is same
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,  // <------ unregister fields on unmount
    validate
})(PatientMiscellanousForm)
