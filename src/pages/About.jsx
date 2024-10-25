import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import AboutHeader from "../../components/AboutUs/AboutHeader";
import AboutContent from "../../components/AboutUs/AboutContent";
import Nutshell from "../../components/AboutUs/Nutshell";
import RecognitionAndServices from "../../components/AboutUs/ServicesRecognition";
import Engagement from "../../components/AboutUs/Engagement";
import WhyBrandsmashers from "../../components/AboutUs/WhyBrandsmashers";
import OurValues from "../../components/AboutUs/OurValues";
import Footer from "../../components/Footer/Footer";
import TextSlider from "../../components/TextSlider/TextSlider";
// import Map from "../../components/AboutUs/Map";
const About = () => {
  return (
    <>
      <Navbar />
      <AboutHeader />
      <AboutContent />
      <Nutshell />
      {/* <RecognitionAndServices/> */}
      <Engagement />
      <WhyBrandsmashers />
      <OurValues />
      {/* <Map /> */}
      <Footer />
      <TextSlider />
    </>
  );
};

export default About;
