import './contact.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faVolumeControlPhone } from '@fortawesome/free-solid-svg-icons';

export default function ContactMe() {
  return (
    <section id="Contact" className="contact--section">
      <div className="portfolio-contact-container">
        <h2 className='contact-title'>Get In Touch</h2>
        <p className="contact--section--para">
        Let's touch base and discuss how I can make a lasting positive impact on your company
        </p>
      </div>

      <div className="two-columns">
    <div className="column">
      <div className="test">
      <h2 className="col-title">Let's&nbsp;<span className='talk-sp'>Talk</span>
      <br />About your project
      </h2>

        <p className="col-para">Start a conversation by filling the form to the right. 
        </p>
       <br />
     


      </div>
<br />
<br />

      <hr className="line" />
<br />
      <div className="follow-icons">
  <h2 className="col-follow">Follow me:</h2>
  <div className="icon-container">
    <div className="follow-icon">
   
    <FontAwesomeIcon 
              icon={faInstagram} 
              className="fa-instagram" 
              />

    </div>
    
     <div className="follow-icon">
     <FontAwesomeIcon 
              icon={faTwitter} 
              className="fa-twitter" 
              />
    </div>
    <div className="follow-icon">
    <FontAwesomeIcon 
              icon={faLinkedin} 
              className="fa-linkedin" 
              />
    </div>
  </div>
</div>


    </div>

<div className="column">
      <form className="contact--form--container">
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">Full name*</span>
            <input
              type="text"
              className="contact--input text-md"
              name="full-name"
              id="full-name"
              placeholder='john david'
              required
            />
          </label>
    
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Your Email*</span>
            <input
              type="email"
              placeholder='example@youremail.com'
              className="contact--input text-md"
              name="email"
              id="email"
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Phone*</span>
            <input
              type="tel"
              inputMode="numeric" // Specify numeric input mode
              placeholder='(000) 123 456'
              className="contact--input text-md"
              name="phone-number"
              id="phone-number"
              required
            />
          </label>
          <label htmlFor="Subject" className="contact--label">
            <span className="text-md">Subject*</span>
            <input
              type="text"
              className="contact--input text-md"
              name="subject"
              id="subject"
              placeholder='ex. project'
              required
            />
          </label>
        </div>
     
        <label htmlFor="message" className="contact--label">
          <span className="text-msg-md">Tell me about your project*</span>
          <textarea
            className="contact--input text-md"
            id="message"
            rows="8"
            placeholder="hello there, i would like to talk about how to..."
          />
        </label>
    
        <div>
          <button className="contact--form--btn">Send Message</button>
        </div>
      </form>
      </div>

      </div>
    </section>
  );
}





{/* <h2 className="col-reach">Reach me directly!</h2>
fu
      <button className="btn-email">
    <div className="e-icon">   
  <lord-icon
    src="https://cdn.lordicon.com/aycieyht.json"
    trigger="hover"
    colors="primary:#ffffff"
    style={{ width: '50px', height: '50px' }}
  />
</div>
<div className="email-content">
  Email 
  
  <a href="mailto:myron.evans@myronevns.com" className="email-link">myron.evans@myronevns.com</a>
</div>
</button>

<br />

<button className="btn-email">
<div className="e-icon">   

  <FontAwesomeIcon 
            icon={ faVolumeControlPhone} 
            className=" fa-volume-control-phone" 
            />
</div>
<div className="email-content">
  Phone &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

  <a href="tel:+19252557535" className="email-link">+1(925)-255-7535</a>
</div>
</button> */}