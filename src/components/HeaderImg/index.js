import React from 'react';

import ImgProfile from '../../assets/imgs/profile/profile.svg'
import  './style.css';

function HeaderImg() {
  return (
      <div className="header_profile">
        <img src={ImgProfile} className="profile_log" />
      </div>
  );
}

export default HeaderImg;