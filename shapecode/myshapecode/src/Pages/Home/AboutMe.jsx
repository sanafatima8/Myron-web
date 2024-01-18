import React from 'react';
import data from "../../data/Aboutme.json";
import './aboutme.css'; // Import the CSS file

export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="portfolio-about-container">
        <h2 className="about-title">My&nbsp;<span className='about-text'>Skills</span></h2>
        <p className="about--section--para">Throughout the years I have fostered skills that help me create interesting and unique
          <br />
          projects. Check them out and see if I have a skill could benefit you and your customers.
        </p>

        <div className="developer-container">
          <div className="full-stack-container">
            <h3 className="developer-heading">Full Stack Developer with:</h3>
            <div className="developer-columns">
              {data.about.slice(0, 18).map((item, index) => (
                <div key={index} className="box">
                  <h2 className="box-heading">{item.title}</h2>
                  <div className="progress-container">
                    <progress className="pro-f" value={item.progress} max="100"></progress>
                    <span className="progress-text">{item.progress}%</span>
                    <div className="circle-container">
                      <img className="circle-image" src={item.src} alt="" />
                      <p className="text-after-circle">Level:</p> <span className="a-one">{item.level}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="frontend-container">
            <h3 className="developer-heading">Frontend Developer with:</h3>
            <div className="developer-columns">
              {data.about.slice(18,22 ).map((item, index) => (
                <div key={index} className="box">
                  <h2 className="box-heading">{item.title}</h2>
                  <div className="progress-container">
                    <progress className="pro-f" value={item.progress} max="100"></progress>
                    <span className="progress-text">{item.progress}%</span>
                    <div className="circle-container">
                      <img className="circle-image" src={item.src} alt="" />
                      <p className="text-after-circle">Level:</p> <span className="a-one">{item.level}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
