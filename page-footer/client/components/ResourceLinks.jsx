import React from 'react';

require('./../styles/block.css');

const ResourceLinks = () => (
  <div id="rlinks" className="block internal open">
    <span className="expand"><i className="material-icons">add</i></span>
    <ul>
      <li className="link major"><span>GIFT CARDS</span></li>
      <li className="link major"><span>STUDENT DISCOUNT</span></li>
      <li className="link major"><span>MILITARY DISCOUNT</span></li>
      <li className="link major"><span>FIND A STORE</span></li>
      <li className="link major"><span>BECOME A MEMBER</span></li>
      <li className="link major"><span>SITE FEEDBACK</span></li>
    </ul>
  </div>
);

export default ResourceLinks;
