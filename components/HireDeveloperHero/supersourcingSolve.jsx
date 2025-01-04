import React from "react";
import styles from "@/styles/HireDevelopers/supersourcingSolve.module.css";
import Link from 'next/link';

const SuperSourcingSolve = () => {
  return (
    <div className={styles.SupersolveContainer}>
      <div className={styles.SupersolveBox}>
        <h2>Top Developers for top companies</h2>
        <p>
          We offer you access to well deserving talent for the technology
          industry that has the capacity to deliver as desired by your business.
          Our team is composed of skilled developers who’re familiar with the
          new tendencies in Internet connections. Whether you require remote
          developers in India or require us to build a dedicated team for your
          business, we offer customized solutions to meet your customized need
          and ensure that you can scale and innovate at pace.
        </p>
        <Link href="/contactus#contact-us">
        <button className={styles.superSolvebutton}>Call Us Today</button>
        </Link>
      </div>
    </div>
  );
};
10255
export default SuperSourcingSolve;
