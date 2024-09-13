// import styles from '../../src/styles/Hero/ContactSlider.module.css';
// import paytm from '../../public/Service/paytm.png';
// import salesforce from '../../public/Service/salesforce.png';
// import swiggy from '../../public/Service/swiggy.png';
// import amazon from '../../public/Service/amazon.png';
// import google from '../../public/Service/google.png';
// import uber from '../../public/Service/uber.png';
// import meta from '../../public/Service/meta.png';
// // import github from '../../public/Service/github.png';
// import inq from '../../public/Service/inq.png';
// import Image from 'next/image';

// const ContactSlider = () => {
//   return (
//     <div className={styles.sliderContainer}>
//       <h2 className={styles.heading}></h2>
//       <div className={styles.slider}>
//         <div className={styles.logoTrack}>
//           {/* Repeat the logos twice for the continuous effect */}
//           <Image src={paytm} alt="Paytm" />
//           <Image src={salesforce} alt="salesforce" />
//           <Image src={swiggy} alt="swiggy" />
//           <Image src={amazon} alt="amazon" />
//           <Image src={google} alt="google" />
//           <Image src={uber} alt="uber" />
//           <Image src={paytm} alt="Swiggy" />
//           <Image src={meta} alt="Meta" />
//           <Image src={inq} alt="inq" />
    
//           {/* Duplicated for the continuous scroll */}
//           <Image src={paytm} alt="Paytm" />
//           <Image src={salesforce} alt="salesforce" />
//           <Image src={swiggy} alt="swiggy" />
//           <Image src={amazon} alt="amazon" />
//           <Image src={paytm} alt="Swiggy" />
//           <Image src={google} alt="google" />
//           <Image src={uber} alt="uber" />
//           <Image src={meta} alt="Meta" />
//           <Image src={inq} alt="inq" />
          
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactSlider;

import styles from '../../src/styles/Hero/ContactSlider.module.css';
import paytm from '../../public/Service/paytm.png';
import salesforce from '../../public/Service/salesforce.png';
import swiggy from '../../public/Service/swiggy.png';
import amazon from '../../public/Service/amazon.png';
import google from '../../public/Service/google.png';
import uber from '../../public/Service/uber.png';
import meta from '../../public/Service/meta.png';
import inq from '../../public/Service/inq.png';
import Image from 'next/image';

const ContactSlider = () => {
  return (
    <div className={styles.sliderContainer}>
      <h2 className={styles.heading}>Top Devs, Trusted by The Best in Business</h2>
      {/* First Row Slider */}
      <div className={styles.sliderRow}>
        <div className={styles.logoTrack}>
          <Image src={paytm} alt="Paytm" />
          <Image src={salesforce} alt="Salesforce" />
          <Image src={swiggy} alt="Swiggy" />
          <Image src={amazon} alt="Amazon" />
          <Image src={google} alt="Google" />
          <Image src={uber} alt="Uber" />
          <Image src={meta} alt="Meta" />
          <Image src={inq} alt="Inq" />
          {/* Duplicated for continuous scroll */}
          <Image src={paytm} alt="Paytm" />
          <Image src={salesforce} alt="Salesforce" />
          <Image src={swiggy} alt="Swiggy" />
          <Image src={amazon} alt="Amazon" />
          <Image src={google} alt="Google" />
          <Image src={uber} alt="Uber" />
          <Image src={meta} alt="Meta" />
          <Image src={inq} alt="Inq" />
        </div>
      </div>
      {/* Second Row Slider */}
      <div className={styles.sliderRow}>
        <div className={styles.logoTrack}>
          <Image src={inq} alt="Inq" />
          <Image src={meta} alt="Meta" />
          <Image src={amazon} alt="Amazon" />
          <Image src={swiggy} alt="Swiggy" />
          <Image src={paytm} alt="Paytm" />
          <Image src={salesforce} alt="Salesforce" />
          <Image src={google} alt="Google" />
          <Image src={uber} alt="Uber" />
          {/* Duplicated for continuous scroll */}
          <Image src={inq} alt="Inq" />
          <Image src={meta} alt="Meta" />
          <Image src={amazon} alt="Amazon" />
          <Image src={swiggy} alt="Swiggy" />
          <Image src={paytm} alt="Paytm" />
          <Image src={salesforce} alt="Salesforce" />
          <Image src={google} alt="Google" />
          <Image src={uber} alt="Uber" />
        </div>
      </div>
    </div>
  );
};

export default ContactSlider;

