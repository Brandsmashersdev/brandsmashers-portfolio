import React from 'react';
import Hero from '../../components/Hero/HeroSection'
import SuperSourcingSolve from '../../components/Hero/supersourcingSolve';
import TopDev from '../../components/Hero/TopDev';
import FeatureSection from '../../components/Hero/FeaturedSection';

const Home = () => {
  return (
    <>
      <Hero/>
      <SuperSourcingSolve />
    <TopDev/>
    <FeatureSection />
    
    </>
  )
}

export default Home