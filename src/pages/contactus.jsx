import ContactSlider from "../../components/contact/ContactSlider";
import ContactUs from "../../components/contact/ContactUs";
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Navbar/Nav";
import Navbar from "../../components/Navbar/Navbar";
import TextSlider from "../../components/TextSlider/TextSlider";
import styles from "../../src/styles/Hero/ContactUs.module.css";


const Contactus = () => {
    return (
        
        <div  className={styles.fullcontainer}>
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
