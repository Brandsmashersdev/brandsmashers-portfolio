import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import AiMl from "../../components/Services/Ai-Ml";
import Browser from "../../components/Services/Browser";
import DataDive from "../../components/Services/DataDive";
import DigitalMarketing from "../../components/Services/DigitalMarketing";
import Graphics from "../../components/Services/Graphics";
import HomePageService from "../../components/Services/HomePageService";
import MobileApp from "../../components/Services/MobileApp";
import UiUXDesign from "../../components/Services/Ui-Ux";
import WebDesign from "../../components/Services/WebDesign";
import TextSlider from "../../components/TextSlider/TextSlider";

const Services = () => {
    return(
        <div >
            <Navbar/>
            <HomePageService/>
            <WebDesign/>
            <MobileApp/>
            <Graphics/> 
            <UiUXDesign/>
            <AiMl/>
            <DataDive/>
            <DigitalMarketing/>
            <Browser />
            
            <Footer/>
            <TextSlider/>
        </div>
    )
}
export default Services;