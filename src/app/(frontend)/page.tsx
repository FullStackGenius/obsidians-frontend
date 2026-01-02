import BlogSection from "./components/BlogSection";
import FaqSection from "./components/FaqSection";
import Header from "./components/Header";
import Footer from "./components/layouts/Footer";
import AboutSection from "./components/home/AboutSection";
import HeroBanner from "./components/home/HeroBanner";
import LogoSliderSection from "./components/home/LogoSliderSection";
import ObsidiansSection from "./components/home/ObsidiansSection";
import ProjectSection from "./components/home/ProjectSection";
import SolvingIt from "./components/home/SolvingIt";
import TrustedSystem from "./components/home/TrustedSystem";
import OurClientSection from "./components/OurClientSection";
import SmartSolutionSection from "./components/SmartSolutionSection";
import "./frontend.css"

const page = () => {


  return (
    <>
      <Header />
      <main>
       
        <HeroBanner />

       
        <LogoSliderSection/>

      

        <AboutSection/>

       
        <ProjectSection/>

       
        <SolvingIt/>


          <ObsidiansSection/>
      

        <SmartSolutionSection />



       
        <TrustedSystem/>

        <OurClientSection />

        <FaqSection/>
        


        <BlogSection />

      <Footer/>




      </main >
    
    </>

  );
};

export default page;
