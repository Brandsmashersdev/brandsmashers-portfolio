// import Image from "next/image";
// import styles from "../../src/styles/Hero/ContactUs.module.css";
// import googleLogo from "../../public/Hero/googles.png";
// // import logo from '../../public/Hero/logobrandsmasher.png';
// // import logo from '../../public/Hero/logoBrandsmashers.png';
// import { GrLinkedin } from "react-icons/gr";
// import ContactSlider from "./ContactSlider";
// import Link from "next/link";
// const ContactUs = () => {  
//   return (
//     <div className={styles.container}>
//       {/* Left Section */}
//       <div className={styles.left}>
//         <div className={styles.header}>
//           <div className={styles.logosection}>
//             {/* <Image 
//               src={logo} 
//               alt="brandsmashers Logo"
//               layout="fixed" 
//               height={100}
//               width={100} 
//             /> */}
//             <h1 className={styles.mainheading}>Brandsmashers Tech</h1>
//           </div>
//           <h2 style={{...styles.h2,lineHeight: "1.3"}}>
//             Work With Only The <br></br>Top Pre-vetted{" "}
//             <span className={styles.highlight}>Tech Talent</span>
//           </h2>
//           <h4 className={styles.paragraph}>Top talent is just a click away</h4>
//           <button className={styles.bookButton}>Book a Call Now</button>
//         </div>

//         <div className={styles.companies}>
//           <div className={styles.buttonWrapper}>
//             <p className={styles.googleButton}>
//               <GrLinkedin />
//               <span className={styles.spanText}>
//                 Top 20 Indians Startups of 2023
//               </span>
//             </p>
//             <p className={styles.googleButton1}>
//               <Image
//                 src={googleLogo}
//                 alt="Google"
//                 width={30}
//                 height={30}
//                 className={styles.textGoogle}
//               />
//               <span className={styles.spanText1}>AI Bootcamp Top 20</span>
//             </p>
//           </div>
//         </div>

//         <div className={styles.trustedBy}>
//           <ContactSlider />
//         </div>
//       </div>

//       {/* Right Section */}
//       <div className={styles.right}>
//         <form className={styles.form}>
//         <p>Name <span className={styles.required}>*</span></p>
//           <div className={styles.name}>
//             <label>
//               <input
//                 type="text"
//                 placeholder="First name"
//                 className={styles.input1}
//                 required
//               />
//             </label>
//             <label>
//               <input
//                 type="text"
//                 placeholder="Last name"
//                 className={styles.input1}
//                 required
//               />
//             </label>
//           </div>

//           <p>Email <span className={styles.required}>*</span></p>
//           <input
//             type="email"
//             placeholder="Email"
//             className={styles.input}
//             required
//           />

//            <p>Phone Number <span className={styles.required}>*</span></p>
//           <input
//             type="tel"
//             placeholder="Phone number"
//             className={styles.input}
//             required
//           />

//           <p>How we can help</p>
//           <div className={styles.radioGroup}>
//             <label>
//               <input
//                 type="radio"
//                 name="help"
//                 value="I'm Recruiting"
//                 required
//                 className={styles.input}
//               />
//               I&apos;m Recruiting
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 name="help"
//                 value="I'm a Developer"
//                 required
//                 className={styles.input}
//               />
//               I&apos;m a Developer
//             </label>
//           </div>

//           <p>What skills are you looking for?</p>
//           <select className={styles.select} required>
//             <option value="">What skills are you looking for?</option>
//             <option value="react">React js</option>
//             <option value="node">Node js</option>
//             <option value="javascript">JavaScript</option>
//             <option value="python">Python</option>
//             <option value="java">Java</option>
//             <option value="sql">SQL</option>
//             <option value="aws">AWS</option>
//             <option value="ml">Machine Learning</option>
//             <option value="angular">Angular</option>
//             <option value="android">Android</option>
//           </select>

//           <p>How did you hear about Brandsmashers?</p>
//           <select className={styles.select} required>
//             <option value="">How did you hear about Brandsmashers?</option>
//             <option value="google">Google</option>
//             <option value="twitter">Twitter</option>
//             <option value="linkedin">LinkedIn</option>
//             <option value="therighthire">The Right Hire</option>
//             <option value="blog">Blog/News/Article</option>
//             <option value="friend">Friend/Colleague</option>
//           </select>

//           <button type="submit" className={styles.submitButton}>
//             Let&apos;s Talk!
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;
"use client"
import { useState } from "react";
import Image from "next/image";
import styles from "../../src/styles/Hero/ContactUs.module.css";
import googleLogo from "../../public/Hero/googles.png";
import { GrLinkedin } from "react-icons/gr";
import ContactSlider from "./ContactSlider";
import axios from "axios";

const ContactUs = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    help: "",
    skills: "",
    referral: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");
    
    const data = {
      ...formData,
      name: `${formData.firstName} ${formData.lastName}`, // Combine first and last name
    };
    try {
      const response = await axios.post("/api/hello", data);  // Adjust the API endpoint as needed
      setMessage("Thank you for reaching out! We will get back to you soon.");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        help: "",
        skills: "",
        referral: ""
      });
    } catch (error) {
      console.error(error)
      setMessage("There was an error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.container} id="contact-us">
      {/* Left Section */}
      <div className={styles.left}>
        <div className={styles.header}>
          <div className={styles.logosection}>
            <h1 className={styles.mainheading}>Brandsmashers Tech</h1>
          </div>
          <h2 style={{ ...styles.h2, lineHeight: "1.3" }}>
            Work With Only The <br />Top Pre-vetted{" "}
            <span className={styles.highlight}>Tech Talent</span>
          </h2>
          <h4 className={styles.paragraph}>Top talent is just a click away</h4>
          <button className={styles.bookButton}>Book a Call Now</button>
        </div>

        <div className={styles.companies}>
          <div className={styles.buttonWrapper}>
            <p className={styles.googleButton}>
              <GrLinkedin />
              <span className={styles.spanText}>
                Top 20 Indians Startups of 2023
              </span>
            </p>
            <p className={styles.googleButton1}>
              <Image
                src={googleLogo}
                alt="Google"
                width={30}
                height={30}
                className={styles.textGoogle}
              />
              <span className={styles.spanText1}>AI Bootcamp Top 20</span>
            </p>
          </div>
        </div>

        <div className={styles.trustedBy}>
          <ContactSlider />
        </div>
      </div>

      {/* Right Section */}
      <div className={styles.right}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <p>Name<span className={styles.required}>*</span></p>
          <div className={styles.name}>
            <label>
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                className={styles.input1}
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                className={styles.input1}
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </label>
          </div>

          <p>Email<span className={styles.required}>*</span></p>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className={styles.input}
            value={formData.email}
            onChange={handleInputChange}
            required
          />

          <p>Phone Number<span className={styles.required}>*</span></p>
          <input
            type="tel"
            name="phone"
            placeholder="Phone number"
            className={styles.input}
            value={formData.phone}
            onChange={handleInputChange}
            required
          />

          <p>How we can help</p>
          <div className={styles.radioGroup}>
            <label>
              <input
                type="radio"
                name="help"
                value="I'm Recruiting"
                checked={formData.help === "I'm Recruiting"}
                onChange={handleInputChange}
                required
                className={styles.input}
              />
              I&apos;m Recruiting
            </label>
            <label>
              <input
                type="radio"
                name="help"
                value="I'm a Developer"
                checked={formData.help === "I'm a Developer"}
                onChange={handleInputChange}
                required
                className={styles.input}
              />
              I&apos;m a Developer
            </label>
          </div>

          <p>What skills are you looking for?</p>
          <select
            name="skills"
            className={styles.select}
            value={formData.skills}
            onChange={handleInputChange}
            required
          >
            <option value="">What skills are you looking for?</option>
            <option value="react">React js</option>
            <option value="node">Node js</option>
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="sql">SQL</option>
            <option value="aws">AWS</option>
            <option value="ml">Machine Learning</option>
            <option value="angular">Angular</option>
            <option value="android">Android</option>
          </select>

          <p>How did you hear about Brandsmashers?</p>
          <select
            name="referral"
            className={styles.select}
            value={formData.referral}
            onChange={handleInputChange}
            required
          >
            <option value="">How did you hear about Brandsmashers?</option>
            <option value="google">Google</option>
            <option value="twitter">Twitter</option>
            <option value="linkedin">LinkedIn</option>
            <option value="therighthire">The Right Hire</option>
            <option value="blog">Blog/News/Article</option>
            <option value="friend">Friend/Colleague</option>
          </select>

          <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Let's Talk!"}
          </button>
        </form>

        {message && (
          <p className={message.includes("Thank you") ? styles.successMessage : styles.errorMessage} >
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default ContactUs;

