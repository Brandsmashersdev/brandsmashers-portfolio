import Head from "next/head";
import Footer from "../../components/Footer/Footer";
import Investors from "../../components/HireDevelopers/Investors";
import Achieved from "../../components/HomePage/Achieved";
import AchiedCardSlider from "../../components/HomePage/AchievedCardSlider";
import Faq from "../../components/HomePage/Faq";
import Homepages from "../../components/HomePage/Homepages";
import NumbersSection from "../../components/HomePage/NumbersSection";
import OurPartners from "../../components/HomePage/OurPartners";
import Services from "../../components/HomePage/servicess";
import TechExpert from "../../components/HomePage/TechExpert";
import Verified from "../../components/HomePage/Verified";
import Navbar from "../../components/Navbar/Navbar";
import TextSlider from "../../components/TextSlider/TextSlider";
import IndustryGrid from "../../components/HomePage/IndustryGrid";
import OurVision from "../../components/HomePage/OurVision";
import WhyBrandSmashers from "../../components/HomePage/WhyBrandSmashers";
import TechShowcase from "../../components/HomePage/TechShowcase";
import BrandsmashersIntro from "../../components/HomePage/BrandsmashersIntro";
import 'bootstrap/dist/css/bootstrap.min.css';

// import Services from "../../components/HomePage/servicess"

const HomeSection = () => {
  <Head>
    <title>Software Development Company In India - Brandsmashers Tech</title>
    <meta
      name="Home Page"
      content="Scale your business with the best and most affordable custom software development companies in India. Get Your Tailored Solution Now! "
    />
  </Head>;
  return (
    <div>
      <Navbar />
      <Homepages />
      <NumbersSection />
      <BrandsmashersIntro />
      <Services />
      {/* <Verified/> */}
      <TechExpert />
      {/* <AchiedCardSlider/>
        <OurPartners/> */}
      <Investors />
      <TechShowcase />
      {/* <AchiedCardSlider/> */}
      {/* <OurPartners /> */}
      <IndustryGrid />

      <OurVision />
      <WhyBrandSmashers />
      <Faq />
      <Footer />
      <TextSlider />
    </div>
  );
};
export default HomeSection;
export function generateMetaData({ params }) {
  return {
    title: "home",
  };
}
