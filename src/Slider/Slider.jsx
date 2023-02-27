import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import EmojiPeopleRoundedIcon from '@mui/icons-material/EmojiPeopleRounded';
import GroupIcon from '@mui/icons-material/Group';

import "./Slider.css";

const Slider = () => {

  
    

  return (
    <div className="container-main">
    <div className="about-us">
        <div className="topic">
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
      <div className="slider">
        <Carousel showThumbs={false} axis={'horizontal'} infiniteLoop={true} autoPlay={true} interval={3000}>
        <div className="image-con">
            <img src="./image/alexander-mils-lCPhGxs7pww-unsplash.jpg" alt='00'/>
            <div className="image-text">
            <h1>Hello world</h1>
            <p>We can get help from us</p>
            <button>
                Get in touch!
            </button>
            </div>
        </div>
        <div className="image-con">
            <img src="./image/cytonn-photography-n95VMLxqM2I-unsplash.jpg" alt='00'/>
            <div className="image-text">
            <h1>Hello world</h1>
            <p>We can get help from us</p>
            <button>
                Get in touch!
            </button>
            </div>
        </div>
        <div className="image-con">
            <img src="./image/microsoft-edge-4m2-9Kyd1i4-unsplash.jpg" alt='00'/>
            <div className="image-text">
            <h1>Hello world</h1>
            <p>We can get help from us</p>
            <button>
                Get in touch!
            </button>
            </div>
        </div>
        </Carousel>
        </div>
        </div>
    <div className='experts-main'>
      <div className="experts">
        
          <EmojiPeopleRoundedIcon />
      
          <h2>
           Definitive Expertise
          </h2>
          <p>Our professionals are top experts with extensive
            ,practical experience, we build strategies and systems </p>
      </div>
      <div className="experts">
        
          <GroupIcon />
      
          <h2>
           Definitive Expertise
          </h2>
          <p>Our professionals are top experts with extensive
            ,practical experience, we build strategies and systems </p>
      </div>
      <div className="experts">
        
          <EmojiPeopleRoundedIcon />
      
          <h2>
           Definitive Expertise
          </h2>
          <p>Our professionals are top experts with extensive
            ,practical experience, we build strategies and systems </p>
      </div>
    </div>
    </div>
  )
}

export default Slider
