import React from 'react';
import Hero from '../../components/Hero/HeroSection';
import Footer from '../../components/Footer/Footer';
import VettingProcess from '../../components/VettingProcess/VettingProcess';
import Navbar from '../../components/Navbar/Navbar';
import SuperSourcingSolve from '../../components/Hero/supersourcingSolve';
import TopDev from '../../components/Hero/TopDev';
import FeatureSection from '../../components/Hero/FeaturedSection';
import WhyBrandsmashers from '../../components/WhyBrandsmashers/WhyBrandmashers';
import FaqSection from '../../components/FaqSection/FaqSection';
// import Brandsmashers from '../../components/WhyBrandsmashers/Brandsmashers';

import Testimonials from "../../components/Hero/Testimonials";
import Investors from "../../components/Hero/Investors";
import Offer from "../../components/Hero/Offer"
import CaseStudies from '../../components/CaseStudies/caseStudies';

const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      {/* <Brandsmashers/> */}
      <FaqSection/>
      <WhyBrandsmashers/>
      
      <SuperSourcingSolve />
      <TopDev/>
      <FeatureSection />
      <Testimonials/>
      <Investors/>
      <Offer/>
      <CaseStudies/>
      <VettingProcess/>
      <FaqSection/>
      <Footer/>
    </>
  )
}

export default Home