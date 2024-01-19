import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";

import MySkills from "../MySkills";

import Work from "../Work";
import Study from "../Study";
import Corevalue from '../Corevalue';
import ClientTestimonials from '../ClientTestimonials';
import Serve from '../Serve';
import Loadingpage from '../Loadingpage'

export default function Home() {
  return (
    <>
     <Loadingpage />
      <HeroSection />
      <Work/>
      <Study/>
      <MySkills />
      <AboutMe />
    
      <Corevalue/>
      <ClientTestimonials/>
      <Serve/>
     
      <ContactMe />
      <Footer />
    </>
  );
}
