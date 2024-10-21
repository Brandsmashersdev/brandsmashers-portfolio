import React from "react";
import Head from "next/head";
import Hero from "../../components/HireDeveloperHero/HeroSection";
import Footer from "../../components/Footer/Footer";
import VettingProcess from "../../components/HireDevelopers/VettingProcess";
import Navbar from "../../components/Navbar/Navbar";
import SuperSourcingSolve from "../../components/HireDeveloperHero/supersourcingSolve";
import TopDev from "../../components/HireDevelopers/TopDev";
import FeatureSection from "../../components/HireDeveloperHero/FeaturedSection";
import WhyBrandsmashers from "../../components/HireDevelopers/WhyBrandmashers";
import FaqSection from "../../components/HireDevelopers/FaqSection";
import Testimonials from "../../components/HireDevelopers/Testimonials";
import Investors from "../../components/HireDevelopers/Investors";
import Offer from "../../components/HireDevelopers/Offer";
import CaseStudies from "../../components/HireDevelopers/caseStudies";
import TextSlider from "../../components/TextSlider/TextSlider";
import IntroductionComp from "../../components/HireDevelopers/IntroductionComp";
import OurHiringModel from "../../components/HireDevelopers/OurHiringModel";

const HireDevelopers = () => {
  return (
    <>
      <Head>
        <title>
          Hire Remote Developers for Your Next Project - Get Started!
        </title>
        <meta
          name="description"
          content="Hire pre-vetted remote developers globally on flexible contracts. Get expert talent for your project—hire now and elevate your business!"
        />
      </Head>
      <Navbar />
      <Hero />
      <IntroductionComp />
      <VettingProcess />
      <SuperSourcingSolve />
      <TopDev />
      {/* <Testimonials/> */}
      {/* <Investors/> */}
      <Offer />
      <OurHiringModel />
      <CaseStudies />

      {/* <WhyBrandsmashers /> */}
      {/* <FeatureSection /> */}
      <FaqSection />
      <Footer />
      <TextSlider />
    </>
  );
};

export default HireDevelopers;
