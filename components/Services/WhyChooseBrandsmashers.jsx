import React from "react";
import style from "@/styles/Service/whychoosebrandsmashers.module.css";
import { FaUserCircle } from "react-icons/fa";
import { FaBrain } from "react-icons/fa";
import { RiFocus2Line } from "react-icons/ri";
import { MdGroups2 } from "react-icons/md";
import { FcApprove } from "react-icons/fc";
import { AiOutlineSolution } from "react-icons/ai";
const WhyBrandCurbSection = () => {
  const features = [
    {
      icon: <AiOutlineSolution />,
      title: "Tailored Solutions",
      description:
        "We offer customized services to match your specific business goals, whether for small-scale or large projects.",
      iconClass: "cyan",
    },
    {
      icon: "📱",
      title: "Comprehensive IT Services",
      description:
        "From web development to mobile apps and digital marketing, we cover all your IT needs with precision.",
      iconClass: "orange",
    },
    {
      icon: <RiFocus2Line />,
      title: "Client-Centric Focus",
      description:
        "Our priority is your satisfaction, with flexible engagement models and dedicated support at every step.",
      iconClass: "yellow",
    },
    {
      icon: <FaBrain />,
      title: "Innovative Approach",
      description:
        "We stay updated on the latest trends, providing future-proof solutions that drive growth.",
      iconClass: "yellow",
    },
    {
      icon: <MdGroups2 />,
      title: "Skilled Team",
      description:
        "Our expert developers specialize in technologies like React.js, Next.js, and AWS, ensuring top-notch results.",
      iconClass: "yellow",
    },
    {
      icon: <FcApprove />,
      title: "Proven Experience",
      description:
        "With a track record of delivering projects on time and beyond expectations, we guarantee success.",
      iconClass: "yellow",
    },
  ];

  return (
    <div className={style.whybrandcurb}>
      {/* Header */}
      <div className={style.header}>
        <div className={style.banner}>
          Customized Strategies and Results-Driven Solutions
        </div>
        <h2 className={style.title}>
          Why <span className="brand-name">Brandsmashers</span>?
        </h2>
        <p className={style.subtitle}>
          What sets us apart is our expertise and dedication to your success.
        </p>
      </div>

      {/* Features Grid */}
      <div className={style.featuresgrid}>
        {features.map((feature, index) => (
          <div key={index} className={style.featurecard}>
            <div className={style.cardcontent}>
              <div className={`${style.iconwrapper} ${feature.iconClass}`}>
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyBrandCurbSection;
