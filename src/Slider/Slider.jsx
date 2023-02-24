import React, {useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

import "./Slider.css";

const Slider = () => {

    const data =  [
        "./image/alexander-mils-lCPhGxs7pww-unsplash.jpg",
        "./image/cytonn-photography-n95VMLxqM2I-unsplash.jpg",
        "./image/microsoft-edge-4m2-9Kyd1i4-unsplash.jpg",
    ];

    

  return (
    <div className='slider'>
        <Carousel showThumbs={false} axis={'vertical'} infiniteLoop={true} autoPlay={true} interval={3000}>
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
  )
}

export default Slider
