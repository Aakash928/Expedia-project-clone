import './Payment.css';
function Payment() {
  return (
    <>
    <div className="heading1">
    <img style={{height:30,}}src="https://www.expedia.co.in/_dms/header/logo.svg?locale=en_GB&siteid=27" alt=""/>
    <a>SIGN IN</a>
    </div>
   
   
    <div className="mainboxcenter">
      
   <div className="mainboxleft">

    {/* login detail */}
    <div>
     <div className="heading">
     <h2>Review and Book</h2>
     </div>

        <div className="login">
          <div className="logindetail">
           <p>Email address</p>
            <input/>
           <p>Password</p>
           <input/>
           <p>Keep me signd in</p>
         <button style={{height:30,width:250, 'background-color':"#ffbf2d", 'border-radius': 10}}>Sign In</button>
          </div>

          <div className="vl"></div>
           <div>
          <div><button  className="otherlogin">Sign in with Google</button>
          </div>
          <br></br>
          <div>
            <button  className="otherlogin"> Sign in with Apple</button>
          </div>
          <br></br>
          <div>
            <button  className="otherlogin">Sign in with Facebook</button>
          </div>
         </div>
        </div>
        
{/* customer detail input */}
      
        <div className="custdetail">
        <div>
          <h4>Traveller info Room 1: 2 Adults 1 King Bed Non-smoking</h4>
        </div>
        <hr></hr>
        <div style={{'display':'flex',"line-height":2,}}>
        <div>
          <p>first name</p>
          <input/>
        </div>
        <div>
          <p>Surname</p>
          <input/>
        </div>
        </div>
        <div>
          <p>Mobile Number</p>
          <input type='number' placeholder="So the property can reach you"/>
        </div>
        </div>
 <div className="payment">
  <div style={{"font-size":12}}>
    <p> We use secure transmission ; We protect your personal information</p>
    <hr></hr>
  </div>
  <div>
    <p>Name on card</p>
    <input type="text"/>
  </div>
  <div>
    <p>Debit/Credit card number*</p>
    <input type="number"/>
  </div>
  <div>
    <p>Security code*</p>
    <input/>
  </div>
  <div>
    <p>Pan</p>
    <input/>
  </div>
 </div>
 {/* Manage your booking option */}

<div className="booking">
  <h3>Manage your booking</h3>
  <hr></hr>
  <h5>Confirmation Email</h5>
  <p>Please enter the email address where you would like to receive your confirmation.</p>
 <h5>Email address</h5>
 <input/>
 <p>Please send me Expedia emails with travel deals, special offers and other information.</p>
 <hr></hr>
 <div>
<h3>Create Account</h3>
<p>Create Password</p>
<input/>
<p>Confirm password</p>
<input/>
<p>By creating an account, I agree to the Terms of Use opens in a new window, Privacy Policy opens in a new window, and Expedia Rewards Terms and Conditions.</p>
 </div>
</div>
{/* information */}
<div className="information">
  <div>
    <h3>Important information about your booking</h3>
  </div>
 <div>
  <ul>
    <li>This rate is non-refundable. If you change or cancel your booking you will not get a refund or credit to use for a future stay. This policy will apply regardless of COVID-19, subject to any local consumer laws.</li>
    <li>No refunds will be issued for late check-in or early check-out.</li>
    <li>Stay extensions require a new reservation.</li>
    <li>If you are planning to arrive after midnight please contact the property in advance using the information on the booking confirmation. Guests will receive an email 72 hours before arrival with check-in instructions. Front desk staff will greet guests on arrival.</li>
    <li>Please note that BEX Travel Asia Pte Ltd and the hotel will not issue a tax invoice. You will receive a commercial receipt for the purpose of the transaction.</li>
  <li>You'll be asked to pay the following charges at the property:
New Year's Eve (31 December) Gala Dinner per adult: INR 12000
New Year's Eve (31 December) Gala Dinner per child: INR 6000 (from 6 to 11 years old)
We have included all charges provided to us by the property.</li>
  </ul>
  <button style={{height:35,width:150, 'background-color':"#ffbf2d", 'border-radius': 5}}>Complete Booking</button>
 </div>
</div>

    </div>
{/* right box */}
<div>
 <div className="hoteldetail">
    <div className="image">
       <div>
        <img style={{height:150,width:290}}src='https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&w=1000&q=80'/>
       </div>
       <div style={{"line-height":10,'font-size':10}}>
        <p>4.4/5 Excellent (164 reviews)
Guests rated this property 4.6/5 for cleanliness</p>
       <p>1 Room: Classic Room, 1 King Bed, Non Smoking</p>
     <p>Check-in: Thu, 30 Jun
Check-out: Fri, 1 Jul
1-night stay</p>  
       </div>
    </div>
 </div>
 <div className="pricedetail">
   <h2>Price detail</h2>
   <hr></hr>
   <p>1 room x 1 nightRs8,249.00</p>
   <p>Taxes and service fees Rs1,484.82</p>
   <hr></hr>
   <h4>Total </h4>
   <hr></hr>
   <h5>Not included in your total</h5>
   <p>Taxes and Fees due at the property are based on current exchange rates, and are payable in local currency. Trip total includes GST that Expedia pays to its vendors (e.g. Hotels). We retain our service fee for facilitating your travel reservation. For details please see our terms of use.</p>
 </div>
 </div> 





  </div>   
    </div>
    </>
  );
}

export default Payment;