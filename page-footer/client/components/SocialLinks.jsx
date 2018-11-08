import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter, faFacebookF, faYoutubeSquare, faInstagram,
} from '@fortawesome/free-brands-svg-icons';

require('./../styles/block.css');

const SocialLinks = () => (
  <div id="slinks" className="block external">
    <ul>
      <li className="link social"><div className="circle"><FontAwesomeIcon icon={faInstagram} transform="shrink-4" /></div></li>
      <li className="link social"><div className="circle"><FontAwesomeIcon icon={faYoutubeSquare} transform="shrink-4" /></div></li>
      <li className="link social"><div className="circle"><FontAwesomeIcon icon={faFacebookF} transform="shrink-4" /></div></li>
      <li className="link social"><div className="circle"><FontAwesomeIcon icon={faTwitter} transform="shrink-4" /></div></li>
    </ul>
  </div>
);

export default SocialLinks;
