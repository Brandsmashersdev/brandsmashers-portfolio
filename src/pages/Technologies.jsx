import Navbar from "../../components/Navbar/Navbar";
import TechnologiesComp from "../../components/Technologies/Technologies";
import TextSlider from "../../components/TextSlider/TextSlider";

const { default: Footer } = require("../../components/Footer/Footer");

const Technologies = () => {
    return (
        <>
            <Navbar/>
            <TechnologiesComp/>
            <Footer/>
            <TextSlider/>
        </>
    );
};

export default Technologies;