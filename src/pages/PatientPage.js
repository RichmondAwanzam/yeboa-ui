
import React from 'react';
import { Link } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Tabs, Tab } from 'material-ui/Tabs';
import CommentView from '../widgets/comment';
import Gallery from 'react-grid-gallery';
import { fetchCampaigns,fetchCampaignComments, uploadCampaignMedias } from '../actions/campaignsActions';
import { connect } from 'react-redux';
import CampaignHeaderCard from '../components/campaign-header-card';
import CreateComment from '../components/create-comment';
import CommentsView from '../components/comments-view';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';
import Modal from 'react-bootstrap/lib/Modal';
import FileUpload from '../widgets/fileupload';
import {SERVER_URL} from '../constants/Config';


class PatientPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showModal: false, imagePreviewUrl: [], file: [] }
    }


    close() {
        this.setState({ showModal: false });
    }

    open() {
        this.setState({ showModal: true });
    }
    componentWillMount() {
        console.log(this.props.params);
        const { campaignId } = this.props.params;

        const { dispatch } = this.props;
        dispatch(fetchCampaigns(campaignId));
        dispatch(fetchCampaignComments(campaignId));

    }
    uploadMediasToServer() {
        const {file} = this.state;
        console.log("foem will subit");
        const { dispatch } = this.props;
        for (var i = 0; i <file.length; i++) {
            dispatch(uploadCampaignMedias(this.props.params.campaignId, file[i]));
        }
    }

    triggerImageUpload(e) {
        this.refs.uploader.click();

    }

    imagesPreviews() {
     
        return this.state.imagePreviewUrl.map(data => {
            return <div className="pull-left" key={data}><img src={data} style={{ objectFit: 'contain' }} height="100px" width="150px" /></div>;
        })
    }

    handleImageChange(e) {
        console.log(e);
        e.preventDefault();
        let reader = new FileReader();
        let comp = this;
        console.log(e.target.files);
        const l = e.target.files.length;
        for (var i = 0; i < e.target.files.length; i++) {
            let file = e.target.files[i];
            reader.onloadend = (i) => {
                console.log(i + " VALUE OF LOOP COUNTER");
                var newArray = this.state.imagePreviewUrl.slice();
                var fileArray = this.state.file.slice();
                newArray.push(reader.result);
                fileArray.push(file);


                this.setState({
                    file: fileArray,
                    imagePreviewUrl: newArray
                });
                this.open();

            }
            reader.readAsDataURL(file)
        }



    }
    render() {

        const { campaign } = this.props;
        let { imagePreviewUrl } = this.state;
        let $imagePreview = null;
        let images = ((this.props.campaign || {}).media || []).map(data => {
            return { src: SERVER_URL + data.path, thumbnail: SERVER_URL + data.path, thumbnailWidth: 220, thumbnailHeight: 112 }
        })

        return (<div>

            <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Images / Video</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        {this.imagesPreviews()}
                        <div className="pull-left" style={{ border: '2px dashed #ccc' }} onClick={this.triggerImageUpload.bind(this)}><i className="fa fa-plus fa-2x" /></div>
                        <div className="clearfix" />
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <button onClick={this.uploadMediasToServer.bind(this)}>Save</button>
                </Modal.Footer>
            </Modal>


            <CampaignHeaderCard title={campaign.title} amountDonated={campaign.amountDonated}
                totalFollowing={campaign.totalFollowing} totalEndorsed={campaign.totalEndorsed} />



            <div className="container">

                <div className="row">

                    <div>
                        <form>
                            <Link onClick={this.triggerImageUpload.bind(this)}>Add Images/Videos</Link>
                            <input ref="uploader" style={{ display: 'none' }} type='file' onChange={this.handleImageChange.bind(this)} />
                        </form>

                    </div>
                    <div className="col-md-3 col-xs-12">
                        <Gallery images={images} />
                    </div>
                    <div className="col-md-9 col-xs-12">
                        <div className="comments-container">
                            <p>{campaign.description}</p>
                        </div>

                        <Tabs className="patient-material-class" >
                            <Tab label="Comments" value="a">
                                <div className="comments-container">
                                    <div className="text-content-area">
                                        Comments
                                         <CommentsView  data={this.props.comments}/>
                                        <CreateComment campaignId={this.props.params.campaignId} type="comment" />
                                    </div>
                                </div>
                            </Tab>

                            <Tab label="Doctors tips" value="b">
                                <div className="comments-container">
                                    <div className="text-content-area">
                                        Doctors Tips
                                        <CommentsView data={this.props.tips}/>
                                        <CreateComment  campaignId={this.props.params.campaignId} type="tip" />
                                    </div>
                                </div>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>);
    }
}
function mapStateToProps(state) {
    const { patientCampaigns } = state;
    const { campaign ,tips,comments } = patientCampaigns;

    return {
        campaign,tips,comments
    };
}
export default connect(mapStateToProps)(PatientPage);
