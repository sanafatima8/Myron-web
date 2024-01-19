
import glassiconanimations from "../../animations/glassicon.json";
import Lottie from 'react-lottie';
import './serve.css';


export default function Work() {


  const glassiconanimationOptions = {
    loop: true,
    autoplay: true,
    animationData: glassiconanimations,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };



    return (
      <section id="serveSection" className="serve--section">

       <div className="serve--section--img">
          <img src="./img/last image.svg" alt="serve Section"  className="last-image"/>
        </div>
       


        <div className="serve--section--content--box">
          <div className="serve--section--content">
            <p className="serve--title">Born to serve</p>
            <h1 className="serve--section--title">
              The perfect addition to 
              <br />
              any team.
            </h1>
        
            <p className="serve--ambition-description">
            I want to thank you for spending time on my portfolio site, I truly
            hope it is clear to you now that I am the right fit fotr your company.
            Cheers to the success of your business!
            </p>
            <a href="your-link-url" className="your-button-class">EXPLORE MY WORKS</a>
            
            <Lottie options={glassiconanimationOptions} height={200} width={220} />


  
{/* <lord-icon
    src="https://cdn.lordicon.com/imupetit.json"
    trigger="hover"
    colors="primary:#c79816,secondary:#ffffff"
    style={{ width: '250px', height: '250px' }}
/> */}
          </div>
        </div>

      

   
      </section>
    );
  }




