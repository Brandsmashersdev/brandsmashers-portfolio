import React from "react";
import Image from "next/image";
import ourvision from "../../public/Hero/ourvisionimg.jpg";
import style from "@/styles/HireDevelopers/introductioncomp.module.css";

const OurVision = () => {
  return (
    <div className={style.herocontainer}>
      <main className={style.maincontent}>
        <div className={style.herogrid}>
          <div className={style.herotext}>
            <h1 className={style.herotitle}>Our Vision</h1>
            <p className={style.herodescription}>
              We design tailored software. The company’s vision entails offering
              the needed technology support to businesses as they transform in
              today’s complex digitized economy. Here at Web Marketing, we
              challenge ourselves to provide solutions that are above the said
              market trends and expectations. Through the offer of advanced
              software development solutions and IT services, the company’s
              mission is to drive development and evolution for every business
              at all levels.
            </p>
            <p className={style.herodescription}>
              At Brandsmashers, technology is how we reveal more to ourselves
              and the world. It is a pleasure to extend this vision to a level
              where organizations shall be able to rely on the solutions we
              shall provide whereby they will be able to expand their
              operational capacities, grow, and create competitive advantage in
              their respective markets. Should it be software development that
              is top-of-the-line, applications tailored just for your needs, or
              digital marketing, we are driven by seeing your business solutions
              enhance your business workflows, increasing efficiency
              and productivity.
            </p>
          </div>
          <div className={style.heroimagecontainer}>
            <div className={style.imagewrapper}>
              <Image
                src={ourvision}
                alt="Developer working"
                className={style.heroimage}
              />
              <div className={style.imageoverlay}></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OurVision;
