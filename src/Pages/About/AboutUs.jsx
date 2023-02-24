import React from 'react'
import EmojiPeopleRoundedIcon from '@mui/icons-material/EmojiPeopleRounded';
import GroupIcon from '@mui/icons-material/Group';

import "./About.css"

function AboutUs() {



  return (
    <>
    <div className='about-wrapper'>
      <div className="experts">
        <icon>
          <EmojiPeopleRoundedIcon />
        </icon>
          <h2>
           Definitive Expertise
          </h2>
          <p>Our professionals are top experts with extensive
            ,practical experience, we build strategies and systems </p>
      </div>
      <div className="experts">
        <icon>
          <GroupIcon />
        </icon>
          <h2>
           Definitive Expertise
          </h2>
          <p>Our professionals are top experts with extensive
            ,practical experience, we build strategies and systems </p>
      </div>
      <div className="experts">
        <icon>
          <EmojiPeopleRoundedIcon />
        </icon>
          <h2>
           Definitive Expertise
          </h2>
          <p>Our professionals are top experts with extensive
            ,practical experience, we build strategies and systems </p>
      </div>
    </div>
    <div className="about-us">
      <div className="main">
        <h2>
          About Cash Afloat
        </h2>
        <p>
          At Cash Afloat, we do more than just provide financial guide
          to your future.

          Since day one we have been guided bu our mission to help
          families create tghe life they want to live, while protecting
          their loved ones and planning their planning financial legacy
        </p>
        <button>
        Get in touch!
      </button>
      </div>
      <div className="center">
        <img src='./image/photo_6032617627404319685_y-removebg.png' alt='ooo'/>
      </div>
      <div className="main">
        <h2>
          About Cash Afloat
        </h2>
        <p>
          At Cash Afloat, we do more than just provide financial guide
          to your future.

          Since day one we have been guided bu our mission to help
          families create tghe life they want to live, while protecting
          their loved ones and planning their planning financial legacy
        </p>
        <button>
        Get in touch!
      </button>
      </div>
    </div>
    </>
  ) 
}


export default AboutUs;
