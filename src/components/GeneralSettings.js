import React, { Component } from 'react';
import Droppie from 'react-droppie';
export default class GeneralSettings extends Component {
    render() {
        return (
            <div>
                <span>Following campaigns 20</span>
                <span>Endorsed campaigns 20</span>
                <span>Donated campaigns 20</span>
                <form className="form-horizontal">
                    <fieldset>

                        <legend>My Profile -> General setting</legend>


                        <Droppie
                           
                            alt='Awesome profile picture'
                            showButton='Upload new Image'
                          
                        />

                        <div className="form-group">
                            <label className="col-md-4 control-label" for="textinput">Account Name</label>
                            <div className="col-md-4">
                                <input id="textinput" name="textinput" type="text" placeholder="your name on ids " className="form-control input-md" />
                               
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="col-md-4 control-label" for="passwordinput">Email</label>
                            <div className="col-md-4">
                                <label>this@meal.com</label>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="col-md-4 control-label" for="passwordinput">Phone Number</label>
                            <div className="col-md-4">
                                <label>2455478554213</label>

                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-4 control-label" for="passwordinput">Anonymous Donor Name</label>
                            <div className="col-md-4">
                                <label>GenerousDonor</label>
                            </div>
                        </div>



                        <div className="form-group">
                            <label className="col-md-4 control-label" for="singlebutton">Deactivate account</label>
                            <div className="col-md-4">
                                <button id="singlebutton" name="singlebutton" className="btn btn-danger">Deactivate</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        );
    }
}