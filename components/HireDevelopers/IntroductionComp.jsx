import React from "react";
import Image from "next/image";
import justimg from "../../public/introductioncomp/hiregirl.png";
import style from "@/styles/HireDevelopers/introductioncomp.module.css";

const IntroductionComp = () => {
  return (
    <div className={style.herocontainer}>
      <main className={style.maincontent}>
        <div className={style.herogrid}>
          <div className={style.herotext}>
            <h1 className={style.herotitle}>
              Hire Top Remote Developers From India For Your Next Project
            </h1>
            <p className={style.herodescription}>
              At Brandsmashers, we partially agree with this statement and would
              like to emphasize that having the right team in place is key to
              the success of any project. That’s why we offer IT staff
              augmentation services, providing a team of highly skilled
              developers on standby to create exactly what you need.
            </p>
            <p className={style.herodescription}>
              Our developers cover all necessary specializations, including web
              developers, mobile developers, frontend developers, and
              open-source specialists. Each professional is selected for their
              high qualifications and dedication to their work.
            </p>
          </div>
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
        </div>
      </main>
    </div>
  );
};

export default IntroductionComp;
