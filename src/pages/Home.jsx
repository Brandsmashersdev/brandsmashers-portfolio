import React from 'react';
import Hero from '../../components/Hero/HeroSection';
import Footer from '../../components/Footer/Footer';
import VettingProcess from '../../components/VettingProcess/VettingProcess';
import Navbar from '../../components/Navbar/Navbar';
import SuperSourcingSolve from '../../components/Hero/supersourcingSolve';
import TopDev from '../../components/Hero/TopDev';
import FeatureSection from '../../components/Hero/FeaturedSection';
import Testimonials from "../../components/Hero/Testimonials";
import Investors from "../../components/Hero/Investors";
import Offer from "../../components/Hero/Offer"

const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <SuperSourcingSolve />
      <TopDev/>
      <FeatureSection />
      <Testimonials/>
      <Investors/>
      <Offer/>
      <VettingProcess/>
      <Footer/>
    </>
  )
}

export default Home