import Footer from "../../components/Footer/Footer";
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
import Services from "../../components/HomePage/servicess"

const HomeSection = () => {
    return (
       <div>
        <Navbar/>
        <Homepages/>
        <NumbersSection/>
        <Services/>
        {/* <Verified/> */}
        <TechExpert/>
        <AchiedCardSlider/>
        <OurPartners/>
        <Faq/>
        <Footer/>
        <TextSlider/>
       </div>
    )
}
export default HomeSection;