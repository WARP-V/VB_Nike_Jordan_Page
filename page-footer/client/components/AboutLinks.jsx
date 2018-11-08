import React from 'react';

require('./../styles/block.css');

const AboutLinks = () => (
  <div id="hlinks" className="block internal closed">
    <span className="expand"><i className="material-icons">add</i></span>
    <ul>
      <li className="link major"><span>ABOUT NIKE</span></li>
      <li className="link minor"><span>News</span></li>
      <li className="link minor"><span>Careers</span></li>
      <li className="link minor"><span>Converse Culture & Careers</span></li>
      <li className="link minor"><span>Investors</span></li>
      <li className="link minor"><span>Sustainable Innovation</span></li>
      <li className="link minor"><span>CA Supply Chain Act</span></li>
    </ul>
  </div>
);

export default AboutLinks;
