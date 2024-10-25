import React from "react";
import Image from "next/image";
import justimg from "../../public/Hero/brandintro.jpg";
import style from "@/styles/Hero/brandsmashersintro.module.css";

const BrandsmashersIntro = () => {
  return (
    <div className={style.herocontainer}>
      <main className={style.maincontent}>
        <div className={style.herogrid}>
          <div className={style.heroimagecontainer}>
            <div className={style.imagewrapper}>
              <Image
                src={justimg}
                alt="Developer working"
                className={style.heroimage}
              />
              <div className={style.imageoverlay}></div>
            </div>
          </div>
          <div className={style.herotext}>
            <h1 className={style.herotitle}>
              Software Development & IT Solutions for Startups to Fortune 500s
              in India
            </h1>
            <p className={style.herodescription}>
              At Brandsmashers, one of the leading software development
              companies in India, we masterfully tackle complex software
              development challenges with innovative technology solutions and
              strategic thought processes. As a trusted software development
              company in Bhopal, we ensure that our approach is customized to
              meet the unique needs of each business we work with.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BrandsmashersIntro;
