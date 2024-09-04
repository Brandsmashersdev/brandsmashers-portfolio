import React from 'react';
import Hero from '../../components/HireDeveloperHero/HeroSection';
import Footer from '../../components/Footer/Footer';
import VettingProcess from '../../components/HireDevelopers/VettingProcess';
import Navbar from '../../components/Navbar/Navbar';
import SuperSourcingSolve from '../../components/HireDeveloperHero/supersourcingSolve';
import TopDev from '../../components/HireDevelopers/TopDev';
import FeatureSection from '../../components/HireDeveloperHero/FeaturedSection';
import WhyBrandsmashers from '../../components/HireDevelopers/WhyBrandmashers';
import FaqSection from '../../components/HireDevelopers/FaqSection';
import Testimonials from "../../components/HireDevelopers/Testimonials";
import Investors from "../../components/HireDevelopers/Investors";
import Offer from "../../components/HireDevelopers/Offer"
import CaseStudies from '../../components/HireDevelopers/caseStudies';
import TextSlider from '../../components/TextSlider/TextSlider';


const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>  
      <Testimonials/>
      <Investors/>
      <SuperSourcingSolve />
      <Offer/>
      <TopDev/>
      <CaseStudies/>
      <WhyBrandsmashers/>
      <VettingProcess/>
      <FeatureSection />
      <FaqSection/>
      <Footer/>
      <TextSlider/>
    </>
  )
}

export default Home