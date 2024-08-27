import React from 'react';
import Hero from '../../components/Hero/HeroSection'
import Navbar from '../../components/Navbar/Navbar';
import SuperSourcingSolve from '../../components/Hero/supersourcingSolve';
import TopDev from '../../components/Hero/TopDev';
import FeatureSection from '../../components/Hero/FeaturedSection';
import WhyBrandsmashers from '../../components/WhyBrandsmashers/WhyBrandmashers';
import FaqSection from '../../components/FaqSection/FaqSection';

const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <FaqSection/>
      <WhyBrandsmashers/>
      <SuperSourcingSolve />
    <TopDev/>
    <FeatureSection />
    
     
    </>
  )
}

export default Home