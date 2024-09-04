import Navbar from "../../components/Navbar/Navbar";
import TechnologiesComp from "../../components/Technologies/Technologies";

const { default: Footer } = require("../../components/Footer/Footer");

const Technologies = () => {
    return (
        <>
            <Navbar/>
            <TechnologiesComp/>
            <Footer/>
        </>
    );
};

export default Technologies;