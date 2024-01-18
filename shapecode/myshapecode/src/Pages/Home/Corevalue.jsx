import data from "../../data/index.json";
import Lottie from 'react-lottie';
import creativityanimations from "../../animations/creativity.json";
import teamworkanimations from "../../animations/teamwork.json";
import innovationanimations from "../../animations/innovation.json";
import qualityanimations from "../../animations/quality.json";
import intergrityanimations from "../../animations/intergrity.json";
import experienceanimations from "../../animations/experience.json";

import './core.css';




export default function MySkills() {
  const getAnimationOptions = (animationIdentifier) => {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };

    switch (animationIdentifier) {
      case 'creativity':
        return {
          ...defaultOptions,
          animationData: creativityanimations,
        };
      case 'teamwork':
        return {
          ...defaultOptions,
          animationData: teamworkanimations,
        };
        case 'innovation':
        return {
          ...defaultOptions,
          animationData: innovationanimations,
        };
        case 'quality':
          return {
            ...defaultOptions,
            animationData: qualityanimations,
          };
          case 'intergrity':
            return {
              ...defaultOptions,
              animationData: intergrityanimations,
            };
            case 'experience':
              return {
                ...defaultOptions,
                animationData: experienceanimations,
              };
      // Add more cases for other animations if needed
      default:
        return defaultOptions;
    }
  };


  return (
    <section className="core--section" id="affiliate">
    <div className="portfolio-core-container">
  <h2 className="core-maintitle">The Core Values that drive&nbsp;
  <br /><span className='core-text'>Everything</span> I do</h2>

</div>

      

      <div className="core--section--container">
        {data?.core?.map((item, index) => {
                    const animationOptions = getAnimationOptions(item.animation);

        return(
          <div key={index} className="core--section--card">
            <div className="core--section--img">
            <Lottie options={animationOptions} height={100} width={120} />


            </div>
            <div className="core--section--card--content">
              <h3 className="core-title">{item.title}</h3>
              <p className="core-description">{item.description}</p>
            
            </div>
          </div>
           );
          })}
      </div>
    </section> 
  );
}
