import React, { Component } from 'react';
import AccountSettings from '../components/AccountSettings'
import PaymentSettings from '../components/PaymentSettings'
import GeneralSettings from '../components/GeneralSettings'
export default class AccountSettingsPage extends Component {

    constructor(props) {
        super(props);
        this.state = { content: <GeneralSettings />, active: "home" };

    }
    settingKeyChanged(type, e) {
        console.log(type);
        if (type === "accounts") {
            this.setState({ content: <AccountSettings />, active: "accounts" })
        } else if (type === "payments") {
            this.setState({ content: <PaymentSettings />, active: "payments" })
        } else if (type === "home") {
            this.setState({ content: <GeneralSettings />, active: "home" })

        }
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-3" style={{ borderRight: "1px solid #ccc" }}>
                        <ul className="setting-menu" style={{ listStyle: "none" }}>
                            <li className={this.state.active === "home" ? "active" : ""} key="home" onClick={this.settingKeyChanged.bind(this, "home")}>
                                <i className="fa fa-cog" aria-hidden="true"></i>
                                &nbsp;&nbsp;Account Home</li>
                            <li className={this.state.active === "payments" ? "active" : ""} key="payments" onClick={this.settingKeyChanged.bind(this, "payments")}>
                                <i className="fa fa-credit-card" aria-hidden="true"></i>
                                &nbsp;&nbsp;Payment Settings</li>
                            <li className={this.state.active === "notifs" ? "active" : ""} key="notifs" onClick={this.settingKeyChanged.bind(this, "notifications")}>
                                <i className="fa fa-user-secret" aria-hidden="true"></i>
                                &nbsp;&nbsp;Notifications Settings</li>
                            <li className={this.state.active === "accounts" ? "active" : ""} key="account" onClick={this.settingKeyChanged.bind(this, "accounts")}>
                                <i className="fa fa-user-secret" aria-hidden="true"></i>
                                &nbsp;&nbsp;Account Settings</li>
                        </ul>
                    </div>
                    <div className="col-md-9">
                        {this.state.content}
                    </div>
                </div>
            </div>
        );
    }
}