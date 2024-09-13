import ContactSlider from "../../components/contact/ContactSlider";
import ContactUs from "../../components/contact/ContactUs";
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Navbar/Nav";
import Navbar from "../../components/Navbar/Navbar";
import TextSlider from "../../components/TextSlider/TextSlider";


const Contactus = () => {
    return (
        
        <div>
      {/* <Nav/> */}
        <Navbar/>
        <ContactUs/>
        {/* <ContactSlider/> */}
        <Footer/>
        <TextSlider/>
        </div>
    );
};

export default Contactus;
