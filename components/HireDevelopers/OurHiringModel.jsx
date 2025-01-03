import React from "react";
import { Bug, FileCode2, Headphones } from "lucide-react";
import style from "@/styles/HireDevelopers/ourhiringmodel.module.css";

const FeatureCard = ({ title, description, icon: Icon }) => (
  <div className={style.featurecard}>
    <h3 className={style.featuretitle}>{title}</h3>
    <div className={style.iconwrapper}>
      <Icon className={style.featureicon}  size={36}/>
    </div>

    <p className={style.featuredescription}>{description}</p>
  </div>
);

const ServiceFeatures = () => {
  const features = [
    {
      icon: Bug,
      title: "Dedicated Developers",
      description:
        "Hire a dedicated developer or a team to work exclusively on your project. This model is perfect for long-term engagements and complex projects that require constant collaboration and development.",
    },
    {
      icon: FileCode2,
      title: "Hourly Hiring",
      description:
        "Need a developer for a few hours or a specific task? Our hourly hiring model allows you to hire remote developers on a flexible basis, ensuring you pay only for the work you need.",
    },
    {
      icon: Headphones,
      title: "Project-Based Hiring",
      description:
        "If you have a clearly defined project with specific deliverables, opt for our project-based model, where our developers focus entirely on delivering your project on time and within budget.",
    },
  ];

  return (
    <div className={style.featurescontainer}>
      <h3 className={style.heading}>Our Hiring Models</h3>
      <p>We offer flexible hiring models to suit your specific project needs</p>
      <div className={style.featuresgrid}>
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceFeatures;
