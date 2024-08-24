// import React from 'react';
// import styles from "../../src/styles/Hero/Navbar.module.css";
// import Image from 'next/image';
// import logo from '../../public/Hero/logo.png';
// import AnimatedButton from '../Hero/AnimationButton';

// const Navbar = () => {
//   return (
//     <div className={styles.navContainer}>
//       {/* Main Navbar */}
//       <div className={styles.navRow}>
//         {/* Logo */}
//         <div className={styles.logo}>
//           <Image 
//             src={logo} 
//             className={styles.logoImage}
//             alt="brandsmashers Logo"
//             layout="fixed" 
//             height={80}
//             width={80}// To handle responsive images
//           />
//         </div>

//         {/* Navigation Links */}
//         <div className={styles.navLinks}>
//           <a href="#">Home</a>
//           <a href="#">Hire Developers</a>
//           <a href="#">Services</a>
//           <a href="#">Technologies</a>
//           <a href="#">About Us</a>
//         </div>

//         {/* Action Buttons */}
//         <div className={styles.navButtons}>
//           <div><AnimatedButton /></div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;

import React from 'react';
import styles from "../../src/styles/Hero/Navbar.module.css";
import Image from 'next/image';
import logo from '../../public/Hero/logo.png';
import AnimatedButton from '../Hero/AnimationButton';

const Navbar = () => {
  return (
    <div className={styles.navContainer}>
      {/* Main Navbar */}
      <div className={styles.navRow}>
        {/* Logo */}
        <div className={styles.logo}>
          <Image 
            src={logo} 
            alt="brandsmashers Logo"
            layout="fixed" 
            height={60}
            width={60} // Adjust based on your design
          />
        </div>

        {/* Navigation Links */}
        <div className={styles.navLinks}>
          <a href="#">Home</a>
          <a href="#">Hire Developers</a>
          <a href="#">Services</a>
          <a href="#">Technologies</a>
          <a href="#">About Us</a>
        </div>

        {/* Action Buttons */}
        <div className={styles.navButtons}>
          <AnimatedButton />
        </div>
      </div>
    </div>
  );
}

export default Navbar;

