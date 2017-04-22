
import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import StripeCheckout from 'react-stripe-checkout';


export default class DonatePage extends React.Component {

  onToken(token){
    fetch('', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(token => {
      alert(`We are in business, ${token.email}`);
    });
  }

  render() {
    return (<div className="container">
    <div className="row sized-container" style={{boxShadow:'1px -3px 10px -2px #ccc'}}>
        <div className="col-xs-12 col-md-4 amt-to-be-paid">
        <div>Amount to Donate</div>
        <input type="text"  placeholder="enter amount" className="amount-textbox"/>
        </div>
        <div className="col-xs-12 col-md-8" style={{position:'relative'}}>
        <div className="complete-payment">Complete Payment Information</div>
        </div>
    </div>
    <div className="row sized-container" style={{boxShadow:'1px 3px 10px -2px #ccc'}}>
    <Tabs
         onSelect={this.handleSelect}
         selectedIndex={0}
       >



         <TabList>

         <Tab>
              <span>Card</span>
         </Tab>

           <Tab>
                <span>Paypal <i className="fa fa-cc-paypal"></i></span>
           </Tab>
           <Tab><span>Stripe <i className="fa fa-cc-stripe"></i></span></Tab>
           <Tab><span>Express Pay</span></Tab>
         </TabList>

         <TabPanel>
         <div className="cd-form">

         <p className="full-width">
           <label htmlFor="cardNumber">Card Name</label>
           <input id="cardName" className="width-100"  name="cardNumber" type="text"/>
         </p>
          <p className="half-width">
            <label htmlFor="cardNumber">Card Number</label>
            <input id="cardNumber" className="width-100"  name="cardNumber" type="text"/>
          </p>

          <p className="half-width">
            <label>Expiration date</label>
            <b>
              <span className="cd-select">
                <select  name="card-expiry-month" id="card-expiry-month">
                  <option value="1">1</option>
                  <option value="1">2</option>
                  <option value="1">3</option>
                  <option value="1">4</option>
                  <option value="1">5</option>
                  <option value="1">6</option>
                  <option value="1">7</option>
                  <option value="1">8</option>
                  <option value="1">9</option>
                  <option value="1">10</option>
                  <option value="1">11</option>
                  <option value="1">12</option>
                </select>
              </span>

              <span className="cd-select">
                <select  name="card-expiry-year" id="card-expiry-year">
                  <option value="2015">2015</option>
                  <option value="2015">2016</option>
                  <option value="2015">2017</option>
                  <option value="2015">2018</option>
                  <option value="2015">2019</option>
                  <option value="2015">2020</option>
                </select>
              </span>
            </b>
          </p>

          <p className="half-width">
            <label htmlFor="cardCvc">Card CVC</label>
            <input id="cardCvc" className="width-50"  name="cardCvc" type="text"/>
          </p>
          <div className="clearfix"/>
          <input type="submit" value="Pay"/>
        </div>
         </TabPanel>

         <TabPanel>
           <h2>Hello from Foo</h2>
         </TabPanel>
         <TabPanel>
         <StripeCheckout
        token={this.onToken.bind(this)}
        stripeKey="pk_test_Ng8RCfCcZEhgS3WsiXSx2Xds"
      >
      <button className="btn btn-primary">Pay
  </button>
      </StripeCheckout>
         </TabPanel>
         <TabPanel>
           <h2>Hello from Baz</h2>
         </TabPanel>
       </Tabs>
    </div>
</div>
);
  }
}
