import React from 'react';
import Hero from '../../components/Hero/HeroSection';
import Footer from '../../components/Footer/Footer';
import VettingProcess from '../../components/VettingProcess/VettingProcess';
import Navbar from '../../components/Navbar/Navbar';
import SuperSourcingSolve from '../../components/Hero/supersourcingSolve';
import TopDev from '../../components/Hero/TopDev';
import FeatureSection from '../../components/Hero/FeaturedSection';

const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <VettingProcess/>
      <SuperSourcingSolve />
      <TopDev/>
      <FeatureSection />
      <Footer/>
    </>
  )
}

export default Home