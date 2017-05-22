
import React from 'react';
import { Link } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Tabs, Tab } from 'material-ui/Tabs';
import CommentView from '../widgets/comment';
import Gallery from 'react-grid-gallery';
import {fetchPatients} from '../actions/campaignsActions';
import {connect} from 'react-redux';
const IMAGES =
  [{
    src: "https://www.jetmag.com/wp-content/uploads/2016/01/hospital.jpg",
    thumbnail: "https://www.jetmag.com/wp-content/uploads/2016/01/hospital.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    isSelected: true,
    caption: "After Rain (Jeshu John - designerspics.com)"
  },
  {
    src: "http://i.huffpost.com/gen/1476444/images/o-BLACK-FAMILY-PRAYING-facebook.jpg",
    thumbnail: "http://i.huffpost.com/gen/1476444/images/o-BLACK-FAMILY-PRAYING-facebook.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [{ value: "Ocean", title: "Ocean" }, { value: "People", title: "People" }],
    caption: "Boats (Jeshu John - designerspics.com)"
  },

  {
    src: "http://i.huffpost.com/gen/3612544/thumbs/o-BLACK-MAN-HOSPITAL-SAD-570.jpg?8",
    thumbnail: "http://i.huffpost.com/gen/3612544/thumbs/o-BLACK-MAN-HOSPITAL-SAD-570.jpg?8",
    thumbnailWidth: 320,
    thumbnailHeight: 212
  }]

 class PatientPage extends React.Component {
  constructor(props) {
    super(props);

  }
  componentWillMount(){
      console.log(this.props.params);
    const {campaignId} =this.props.params;
  
    const {dispatch} = this.props;
    dispatch(fetchPatients(campaignId));

  }
  render() {
    return (<div>
      <article className="user-card"><div className="g-row g-cont">
        <div className="g-col">
          <h1 className="user-card__title">{this.props.patient.title}</h1>
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
          <div className="col-md-4 col-xs-12">
             <Gallery images={IMAGES} />
          </div>
          <div className="col-md-8 col-xs-12">
            <div className="comments-container">
              <p> sum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
               aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
               no sea takimata sanctus est Lorem ipsum dolor sit amet.
               Lorem ipsum dolor sit amet, consetetur sadipscing elitr,  sed diam nonumy eirmod tempor invidunt ut labore et dolore
                magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
                elitr,  sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
                et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
                 sit amet.
               Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat
               nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue
               duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
            </div>
            <Tabs className="patient-material-class" >
              <Tab label="Comments" value="a">
                <div className="comments-container">
                  <div className="text-content-area">
                    Comments
                <ul className="media-list">
                      <li className="media">
                        <CommentView />
                      </li>
                      <li className="media">
                        <CommentView />
                      </li>
                    </ul>
                    <div style={{ width: '100%' }}>
                      <div className="pull-left" style={{ width: '85%' }}>
                        <input type="text" className="comment-textbox" placeholder="Enter comment here" />
                      </div>
                      <div className="pull-right" style={{ width: '15%' }}>
                        <button className="btn btn-primary flatbutton">
                          Comment
                      </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>

              <Tab label="Doctors tips" value="b">
                <div className="comments-container">
                  <div className="text-content-area">
                    Doctors Tips

                  <ul className="media-list">
                      <li className="media">
                        <CommentView />
                      </li>
                      <li className="media">
                        <CommentView />
                      </li>
                    </ul>
                    <div style={{ width: '100%' }}>
                      <div className="pull-left" style={{ width: '85%' }}>
                        <input type="text" className="comment-textbox" placeholder="Enter comment here" />
                      </div>
                      <div className="pull-right" style={{ width: '15%' }}>
                        <button className="btn btn-primary flatbutton">
                          Add Tip
                      </button>
                      </div>
                    </div>
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
  const {patients } = state;

  return {
   patients
  };
}
export default connect(mapStateToProps)(PatientPage);
