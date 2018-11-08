import React from 'react';

require('./../styles/block.css');

const HelpLinks = () => (
  <div id="hlinks" className="block internal closed">
    <span className="expand"><i className="material-icons">add</i></span>
    <ul>
      <li className="link major"><span>GET HELP</span></li>
      <li className="link minor"><span>Order Status</span></li>
      <li className="link minor"><span>Shipping & Delivery</span></li>
      <li className="link minor"><span>Returns</span></li>
      <li className="link minor"><span>Payment Options</span></li>
      <li className="link minor"><span>Contact Us</span></li>
    </ul>
  </div>
);

export default HelpLinks;
