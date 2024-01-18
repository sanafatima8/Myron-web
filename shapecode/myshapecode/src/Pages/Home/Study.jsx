import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { ReactComponent as WorkIcon } from "./work.svg";
import { ReactComponent as SchoolIcon } from "./school.svg";
import timelineanimations from "../../animations/timeline.json";
import Lottie from 'react-lottie';
import './study.css';

import "react-vertical-timeline-component/style.min.css";
<div> Icons made by <a href="https://www.freepik.com" title="Freepik"> Freepik </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></div>
import data from "../../data/TimelineElements.json";
import './verticaltimeline.css';



export default function MySkills() {


  // const timelineanimationOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: timelineanimations,
  //   rendererSettings: {
  //     preserveAspectRatio: 'xMidYMid slice',
  //   },
  // };



  let workIconStyles = { background: "goldenrod" };
  let schoolIconStyles = { background: "#8d611d" };
 
  return (
    <section className="study--section" id="study">
      <div className="portfolio-study-container">
        <h2 className="study-title">Education and Professional&nbsp;<span className='study-text'>Timeline Story</span></h2>
        <p className="study--section--para">
          I have been writing code for longer than I have been designing, but here is a visual
          <br />
          representation of my educational and professional story. I hit a few road blocks, but with
          <br />perseverance, I made it.
        </p> 

        <div>
          <VerticalTimeline>
            {data?.timeline?.map((element) => {
              let isWorkIcon = element.icon === "work";
              let showButton = element.buttonText !== undefined && element.buttonText !== null && element.buttonText !== "";

           

              return (
                <VerticalTimelineElement 
                key={element.id}
                iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                icon={<div className="horizontal-line-icon"></div>}
                className="box-content" 
              >
                            {/* <Lottie options={timelineanimationOptions} height={200} width={220} /> */}

                  <p className="vertical-timeline-element-year">
                    {element.year}
                  </p>
                  <h1 className="vertical-timeline-element-place">
                    {element.place}
                  </h1>
                  <h1 className="vertical-timeline-element-result">
                    {element.result}
                  </h1>
                  <p className="vertical-timeline-element-detail">
                    {element.detail}
                  </p>
                  {showButton && (
                    <a
                      className={`button ${
                        isWorkIcon ? "workButton" : "schoolButton"
                      }`}
                      href="/"
                    >
                      {element.buttonText}
                    </a>
                  )}
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </div>
      </div>


      <div className="study-story">
  <div className="study-story-content">
  <h2 className="story-title">
    Share my website and story with someone it can help

  </h2>
  <br />
  <p className="story-para">We all have struggles and failures in life,
    please share my website with nyone you believe my story can help.If you are
    inspired by my story and would like to support me, please contact me for a projct, referral program, or visit my
    store, some of the proceeds from my store will go towrds helping my 
    freelance career grow and the rest will go to Bridfing Tech and Tech Kids 
    Unlimited.
  </p>
<br />
<br />
  <a href="your-link-url" className="story-button">SHARE NOW</a>

  </div>
 
</div> 
    </section>
  );
}
 



























        {/* <div className="timeline"></div>

       
        <div className="study-section-content-box left ">
          <dir className='study--section--content'>
            <p className="study-year">June 2014</p>
            <h2 className="study-place">Graduated from  High school</h2>
            <p className="study-result">Not accepted any of the top Universities GPA: 3.75</p>
            <p className="study--detail">
              Participated in music program and engineering program. Was
              introduced to electronics through Vex Robotic competitions. I 
              sold candy in the school the first couple of years and when I 
              turned 16 picked up jobs at Togos and Baskin Robbins. Also 
              attended the local community college using concurrent
              enrollment while in high school and I learned more about coding,
              design, and different things, but I did not follow any degree
              path.
            </p>
          </dir>
        </div>

    
        <div className="study-section-content-box right ">
          <dir className='study--section--content'>
            <p className="study-year">2014-2015</p>
            <h2 className="study-place">Worked and Attended Community College</h2>
            <p className="study-result">Making my own way, GPA 3.5</p>
            <p className="study--detail">
              Attended a community college with the intent to transfer to Purdue
              University and worked as a barista at Starbucks. Completed only the 
            necessary requirements for late admission to Purdue University. All I 
            had left was Spanish 2, I took it in Spring 2015.
            </p>
          </dir>
        </div>


        











        <div className="study-section-content-box left">
          <dir className='study--section--content'>
            <p className="study-year">August 2015</p>
            <h2 className="study-place">Accepted into Purdue University</h2>
            <p className="study-result">Taking a risk, GPA: 3.5</p>
            <p className="study--detail">
             Accepted into Purdue University with a partial scholarship.
            </p>
          </dir>
        </div>

      
        <div className="study-section-content-box right">
          <dir className='study--section--content'>
            <p className="study-year">May 2016</p>
            <h2 className="study-place">Accepted into First Year Engineering College</h2>
            <p className="study-result">Dreams,Major: Computer Engineering, GPA: 2.95</p>
            <p className="study--detail">
             Accepted into the Engineering college within Purdue University.I
             was in the Engineering Projects in Community Service Course EPICS
             part of a team that built a project called 'A Fresh Start' that was 
             recognize at UC Berkeley. I also participated in the Minority
            Engineering Program MEP, Black Student Union BSU, and the National Society of Black Engineers NSBE.
            </p>
          </dir>
        </div>


        

        
       
        <div className="study-section-content-box left">
          <dir className='study--section--content'>
            <p className="study-year">December 2017</p>
            <h2 className="study-place">Dropped out of Purdue University</h2>
            <p className="study-result">The failure,GPA:0.71</p>
            <p className="study--detail">
               I had part of my tuition covered and the other part I worked
               to pay, but because my GPA fell below a 3.5 I lost my 
               Scholarship and I lost my employent at the same time, I 
               could not stay. I was sad and disappointed for a while,as I 
               wanted that degree very much. I had to find another way. 
            </p>
          </dir>
        </div>

      
        <div className="study-section-content-box right">
          <dir className='study--section--content'>
            <p className="study-year">January 2018</p>
            <h2 className="study-place">Enrolled in Community College Again</h2>
            <p className="study-result">Started from scratch</p>
            <p className="study--detail">
            Had to start from scratch since the general education requirements
            were different from Purdue's and not all of my credits would transfer
            from an out-of-state college. I worked many different retail customer
            service jobs, while also learning the more about fundamentals od 
            Software Engineering, and volunteered at food banks, found a love
            for serving others and re-ignited my passion for writing code and solving problems.

            </p>
          </dir>
        </div>


        
        
      
        <div className="study-section-content-box left">
          <dir className='study--section--content'>
            <p className="study-year">December 2021</p>
            <h2 className="study-place">Graduated from  Community College</h2>
            <p className="study-result">The beginning of redemption, Degree GPA:3.33</p>
            <p className="study--detail">
            I was grateful to have achieved the degree, but I was still hurt 
            from my past educational failure, I did not even attend the
            graduation. I also completed a bootcamp in iSO app
            development from Angela Yu among other courses and I 
            interviewed and laanded an intership as an iOS developer
            beginning the next year. I was very excited and ready to learn 
            from professionals.
            </p>
          </dir>
        </div>

      
        <div className="study-section-content-box right">
          <dir className='study--section--content'>
            <p className="study-year">2022</p>
            <h2 className="study-place">Accepted into and Enrolled in California State University East Bay </h2>
            <p className="study-result">My second chance</p>
            <p className="study--detail">
             I started my University education over at California State University 
            East Bay and I receivedd an intership paying higher than any other
             job I had till then, from Whistle Mobile, I felt as I was given second
             chance,a chance to improve myself and my education even furture
             with being accepted into another University and professional 
            experience working full-time for a mid to large size company.
            </p>
          </dir>
        </div>


        
        

        <div className="study-section-content-box left">
          <dir className='study--section--content'>
            <p className="study-year">2023</p>
            <h2 className="study-place">Graduated from California State University East Bay</h2>
            <p className="study-result">A journey's end,GPA:3.57</p>
            <p className="study--detail">
            Half way through my education at East Bay I landed great
            paying part time software engineering contract role as a 
            Flutter Engineer at a little startup with a big heart called
            Ardley, where I was able to work and pay for the rest of my 
            education.
            </p>
            <br />
            <p className="study--detail">
                 I graduated with honors GPA 3.57, and a focus in Mobile
                 Development and Artificial Intelligence.After everything I 
                 reached my goal.Throughout it all I was thankful,for the 
                 journey,for believing I could accomplish it, for the hard work I 
                 put in, and for never giving up.My education was along road 
                 and success was at the end and around the corner. I am
                thankful.
            </p>
          </dir>
        </div>

       
        <div className="study-section-content-box right">
          <dir className='study--section--content'>
            <p className="study-year">August 2023-current</p>
            <h2 className="study-place">Freelance Full-time (Self Employed) </h2>
            <p className="study-result">The next chapter</p>
            <p className="study--detail">
            After work at my last company ended I saved most of the money
            and used a little of it as a runway to invest in my freelance software 
            development business, since then I've worked with multiple clients,
            designing and developing siftware that makes people smille.I truly
            hope my story can be an inspiration to a kid, someone, anyone with
            a dreeam achieve more in life.Never let anything stop you.Cheers to 
            your success!

            </p>
          </dir>
        </div> */}
