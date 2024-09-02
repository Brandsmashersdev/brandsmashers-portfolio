import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import HomePage from "./Home"
import HomeSection from "./HomeSection";
import About from "./About"


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    
    <HomePage/>
    <HomeSection/>
    <About/>
  

    </>
  );
}

// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Head from "next/head";
// import Image from "next/image";
// import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";
// import HomePage from "./Home"
// // import HomePages from "./HomePages";


// const inter = Inter({ subsets: ["latin"] });

// export default function Home() {
//   return (
//     <>
//        <BrowserRouter>
//       <Routes>
//         <Route path="/homePage" element={<HomePages />} />
//         <Route path="/hirePage" element={<HomePage />} />
        
//       </Routes>
//     </BrowserRouter>
//     </>
//   );
// }
