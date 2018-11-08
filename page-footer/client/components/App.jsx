import React from 'react';

import ResourceLinks from './ResourceLinks';
import HelpLinks from './HelpLinks';
import AboutLinks from './AboutLinks';
import SocialLinks from './SocialLinks';
import LegalLinks from './LegalLinks';

require('./../styles/app.css');

const App = () => (
  <div id="page-footer">
    <div id="footer-links">
      <ResourceLinks />
      <HelpLinks />
      <AboutLinks />
      <SocialLinks />
      <LegalLinks />
    </div>
  </div>
);

export default App;
