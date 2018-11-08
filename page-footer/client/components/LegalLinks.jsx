import React from 'react';

import GuideLinks from './GuideLinks';

require('./../styles/bline.css');

const LegalLinks = () => (
  <div id="llinks" className="bline">
    <span id="ll1" className="link white left">
      <img className="left" src="//content.nike.com/content/dam/nike/global/country_flags/us_sml.png" alt="" />
      United States
    </span>
    <span id="ll2" className="link grey left">@ 2018 Warp-V, Ltd. No Rights Reserved</span>
    <span id="ll3" className="link grey right">Privacy Policy</span>
    <span id="ll4" className="link grey right">Terms of Use</span>
    <span id="ll5" className="link grey right">
      Guides
      <GuideLinks />
    </span>
  </div>
);

export default LegalLinks;

//
