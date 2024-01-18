import data from "../../data/index.json";
import './skills.css';
import Lottie from 'react-lottie';
import designanimations from "../../animations/design.json";
import developmentanimations from "../../animations/development.json";





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
      case 'design':
        return {
          ...defaultOptions,
          animationData: designanimations,
        };
      case 'development':
        return {
          ...defaultOptions,
          animationData: developmentanimations,
        };
      // Add more cases for other animations if needed
      default:
        return defaultOptions;
    }
  };

  return (
    <section className="skills--section" id="Bento">
      <div className="portfolio-container">
        <h2 className="section-title">
          My&nbsp;<span className="skill-text">Services</span>
        </h2>
        <p className="skills--section--para">
          Throughout the years I have fostered skills that help me create interesting and unique projects. Check them out
          and see if I have a skill that could benefit you and your customers.
        </p>
      </div>

      <div className="skills--section--container">
        {data?.skills?.map((item, index) => {
          const animationOptions = getAnimationOptions(item.animation);

          return (
            <div key={index} className="skills--section--card">
              <div className="skills--section--img">
                <Lottie options={animationOptions} height={100} width={120} />
              </div>
              <div className="skills--section--card--content">
                <h3 className="skills-title">{item.title}</h3>
                <p className="skills-description">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}



// {item.id === '1' && (
//   <lord-icon
//     src="https://cdn.lordicon.com/xirobkro.json"
//     trigger="hover"
//     colors="primary:#ffffff,secondary:#c79816"
//     style={{ width: '100px', height: '100px' }}
//   />
// )}
// {item.id === '2' && (

//  <lord-icon
//      src="https://cdn.lordicon.com/zorvjzqh.json"
//      trigger="hover"
//      colors="primary:#ffffff,secondary:#c79816"
//      style={{ width: '100px', height: '100px' }}
    
//  />
// )}