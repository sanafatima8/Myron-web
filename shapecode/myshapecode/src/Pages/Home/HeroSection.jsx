import React from 'react';
import Typed from 'react-typed';

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">

      <div className="hero--section--img-mobile">
        <img src="./img/myron beige bg 1.jpg" alt="Hero Section Mobile" />
      </div>

      <div className="hero--section--img">
        <img src="./img/myron beige bg 1.jpg" alt="Hero Section" />
      </div>

      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <Typed
            strings={['Unveiling the Synthesis of <br /> Design and Technology']}
            typeSpeed={60}
            backSpeed={30}
            loop
          >
            <h1 className="hero--section--title"></h1>
          </Typed>
        </div>
        <div className="center-container">
          <a href="#study" className="your-class">EXPLORE MY WORKS</a>
        </div>
      </div>

    </section>
  );
}
