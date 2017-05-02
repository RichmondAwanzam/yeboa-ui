import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from '../utils/forms/validate'
import renderField from '../utils/forms/renderfield'
const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet']

const renderColorSelector = ({ input, meta: { touched, error } }) => (
    <div>
        <select {...input}>
            <option value="">Select a color...</option>
            {colors.map(val => <option value={val} key={val}>{val}</option>)}
        </select>
        {touched && error && <span>{error}</span>}
    </div>
)

class PatientMiscellanousForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { file: "", imagePreviewUrl: "" };
        this.handleImageChange.bind(this);
    }

    handleImageChange(e) {
        e.preventDefault();
        let reader = new FileReader();
        console.log(e.target);
        let comp = this;
        let file = e.target.files[0];
        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }
        this.setState({
            file: file,
            imagePreviewUrl: file.filename
        });
        reader.readAsDataURL(file)
    }
    render() {
        const { handleSubmit, pristine, previousPage, submitting } = this.props;
        let { imagePreviewUrl } = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} />);
        } else {
            $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
        }
        return (
            <form className="form-labels-on-top" onSubmit={handleSubmit}>
                <div className="form-title-row">
                    <h1>Patient  Add-ons and Media</h1>
                </div>
                <Field name="images" type="file" onChange={this.handleImageChange} component={renderField} label="Pictures" />
                <div><div>{this.state.imagePreviewUrl}</div></div>
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
