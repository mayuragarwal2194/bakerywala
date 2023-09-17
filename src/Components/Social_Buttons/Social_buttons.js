import React from 'react';
import SocialStyles from './Social_Buttons.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faDribbble } from '@fortawesome/free-brands-svg-icons';
import { faBehance } from '@fortawesome/free-brands-svg-icons';

const Social_buttons = () => {
  return (
    <>
      <div className={`${SocialStyles.header_social} flex items-center gap-x-6`}>
        <a href="#">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faDribbble} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faBehance} />
        </a>
      </div>
    </>
  )
}

export default Social_buttons