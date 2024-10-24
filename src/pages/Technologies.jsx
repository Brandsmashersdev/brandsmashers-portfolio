import Navbar from "../../components/Navbar/Navbar";
import TechnologiesComp from "../../components/Technologies/Technologies";
import TextSlider from "../../components/TextSlider/TextSlider";
import TechnologiesCard from "../../components/Technologies/TechnologiesCard";
import Industries from "../../components/Technologies/Industries";

const { default: Footer } = require("../../components/Footer/Footer");

const Technologies = () => {
    return (
        <>
            <Navbar/>
            <TechnologiesComp/>
            <TechnologiesCard/>
            <Industries/>
            <Footer/>
            <TextSlider/>
        </>
    );
};

export default Technologies;