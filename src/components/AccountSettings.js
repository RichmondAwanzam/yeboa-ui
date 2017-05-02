import React, { Component } from 'react';
export default class AccountSettings extends Component {
    render() {
        return (

            <form className="form-horizontal">
                <fieldset>

                    <legend>My Profile -> Account setting</legend>


                    <div className="form-group">
                        <label className="col-md-4 control-label" for="textinput">Change Email ID</label>
                        <div className="col-md-4">
                            <input id="textinput" name="textinput" type="text" placeholder="your current email " className="form-control input-md" />
                            <span className="help-block">your new email ID</span>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-md-4 control-label" for="passwordinput">new password</label>
                        <div className="col-md-4">
                            <input id="passwordinput" name="passwordinput" type="password" placeholder="new password" className="form-control input-md" />

                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-md-4 control-label" for="passwordinput">repeat password</label>
                        <div className="col-md-4">
                            <input id="passwordinput" name="passwordinput" type="password" placeholder="repeat password" className="form-control input-md" />

                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-md-4 control-label" for="selectbasic">set security question</label>
                        <div className="col-md-4">
                            <select id="selectbasic" name="selectbasic" className="form-control">
                                <option value="1">Question 1</option>
                                <option value="2">Question 2</option>
                                <option value="3">Question 3</option>
                            </select>
                        </div>
                    </div>

                   


                    <div className="form-group">
                        <label className="col-md-4 control-label" for="checkboxes">Make Anonymous Donation</label>
                        <div className="col-md-4">
                            <div className="checkbox">
                                <label for="checkboxes-0">
                                    <input type="checkbox" name="checkboxes" id="checkboxes-0" value="1" />
                                    Yes
                                </label>
                            </div>
                            <div className="checkbox">
                                <label for="checkboxes-1">
                                    <input type="checkbox" name="checkboxes" id="checkboxes-1" value="2" />
                                    No
                             </label>
                            </div>
                          
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-4 control-label" for="singlebutton">Anonymous Name</label>
                        <div className="col-md-4">
                            KindDonor
                        </div>
                    </div>


                    <div className="form-group">
                        <label className="col-md-4 control-label" for="singlebutton">Remove my account</label>
                        <div className="col-md-4">
                            <button id="singlebutton" name="singlebutton" className="btn btn-danger">remove</button>
                        </div>
                    </div>
                </fieldset>
            </form>
        );
    }
}