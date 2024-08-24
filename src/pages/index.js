import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import HomePage from "./Home"
import Testimonials from "../../components/Hero/Testimonials";
import Investors from "../../components/Hero/Investors";
import Offer from "../../components/Hero/Offer"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    
    <HomePage/>
    <Testimonials/>
    <Investors/>
    <Offer/>

    </>
  );
}
