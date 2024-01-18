import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import animations from "../../animations/ambition.json";
import purposeAnimation from "../../animations/purpose.json"; 


import Lottie from 'react-lottie';

import './work.css';

export default function Work() {
  const [ref, inView] = useInView({
    rootMargin: '0px 0px -5% 0px',
  });

  useEffect(() => {
    if (inView) {
      // Add any additional logic or side effects you need
    }
  }, [inView]);


  const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: animations,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };





  const purposeAnimationOptions = {
    loop: true,
    autoplay: true,
    animationData: purposeAnimation, // Use the imported animation data
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };





  return (
    <section id="workSection" className="work--section">
      <div className="work--section--content--box">
        <div className="work--section--content">
        

          <p className="work--title">What drives me</p>
          <h1 className="work--section--title">
            Crafting stories through
            <br />
            Development and Design
          </h1>

          <div className='am-icon'>
          <Lottie options={animationOptions} height={100} width={120} />
          
          </div>

          <p className="work--Ambition">My Ambition</p>
          <p className="work--ambition-description">
            My ambition is to offer the pinnacle of perfect user-centered design
            and development to my clients. I aim to offer the best services and
            an outstanding experience to anyone who works with me. I have
            spent many years offering world-class customer service in retail
            work environments, I know how to satisfy my clients,
            and I'll get to know what is best for yours.
          </p>

          <div className="pur-icon">
          <Lottie options={purposeAnimationOptions} height={150} width={150} />
          </div>

          <p className="work--Purpose">My Purpose</p>
          <p className="work--purpose-description">
            My purpose is to impact as many people as possible in a
            positive way, through my faith, interactions, and work.
          </p>
        </div>
      </div>

      <div className="work--section--img">
        {/* <img src='./img/dots.svg' alt="" className="dots-image" /> */}
        <img src={process.env.PUBLIC_URL + '/img/first.png'} alt="" className="svg-container" />

        <div className={`horizontal--banner ${inView ? 'animate' : ''}`} ref={ref}>
          <h1 className="three-plus"> Frontend developer <br />
            and designer</h1>
        </div>
      </div>
    </section>
  );
}
