// import React from "react";

// const IndustryCard = ({ icon, title }) => (
//   <div className="industry-card">
//     <div className="shine" />
//     <div className="icon-container">{icon}</div>
//     <h3 className="industry-title">{title}</h3>
//   </div>
// );

// const IndustryGrid = () => {
//   const industries = [
//     {
//       title: "Real-estate",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={1.5}
//             d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
//           />
//         </svg>
//       ),
//     },
//     {
//       title: "Retail",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={1.5}
//             d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
//           />
//         </svg>
//       ),
//     },
//     {
//       title: "Automotive",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={1.5}
//             d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
//           />
//         </svg>
//       ),
//     },
//     {
//       title: "EV Industry",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={1.5}
//             d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
//           />
//         </svg>
//       ),
//     },
//     {
//       title: "Cloud",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={1.5}
//             d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
//           />
//         </svg>
//       ),
//     },
//     {
//       title: "Education",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={1.5}
//             d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
//           />
//         </svg>
//       ),
//     },
//     {
//       title: "Finance",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={1.5}
//             d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
//           />
//         </svg>
//       ),
//     },
//     {
//       title: "Health",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={1.5}
//             d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
//           />
//         </svg>
//       ),
//     },
//   ];

//   return (
//     <div className="industry-container">
//       <div className="industry-grid">
//         {industries.map((industry, index) => (
//           <IndustryCard
//             key={index}
//             icon={industry.icon}
//             title={industry.title}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default IndustryGrid;

// components/Industries.jsx
import React from "react";
import styles from "@/styles/Hero/industrygrid.module.css";

const IndustryGrid = () => {
  const industries = [
    {
      id: 1,
      name: "Real-estate",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={styles.icon}
        >
          <path d="M3 21h18M3 7v14M21 7v14M3 7l9-4 9 4M12 3v4m2.25 14v-5a1.5 1.5 0 00-1.5-1.5h-1.5a1.5 1.5 0 00-1.5 1.5v5" />
        </svg>
      ),
    },
    {
      id: 2,
      name: "Retail",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={styles.icon}
        >
          <path d="M3 3h18v18H3zM21 9H3M15 21V9" />
        </svg>
      ),
    },
    {
      id: 3,
      name: "Automotive",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={styles.icon}
        >
          <path d="M5 17h14v4H5zM5 13l2-6h10l2 6M3 17h18M7 17v2M17 17v2" />
        </svg>
      ),
    },
    {
      id: 4,
      name: "EV Industry",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={styles.icon}
        >
          <path d="M23 11h-3v-3h-2v3h-3v2h3v3h2v-3h3zM4 21V8M4 8l5-5 5 5M4 12h10" />
        </svg>
      ),
    },
    {
      id: 5,
      name: "Cloud",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={styles.icon}
        >
          <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" />
        </svg>
      ),
    },
    {
      id: 6,
      name: "Education",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={styles.icon}
        >
          <path d="M22 10l-8-4-8 4-4-2v10l4 2 8-4 8 4 4-2V8l-4-2zM6 12v8M18 12v8M12 6v8" />
        </svg>
      ),
    },
    {
      id: 7,
      name: "Finance",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={styles.icon}
        >
          <path d="M12 20V10M18 20V4M6 20v-4" />
        </svg>
      ),
    },
    {
      id: 8,
      name: "Health",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={styles.icon}
        >
          <path d="M22 12h-4v4h-4v4H6a2 2 0 01-2-2V6c0-1.1.9-2 2-2h12v4h4v4z" />
        </svg>
      ),
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Industries We Serve</h2>
        <p className={styles.description}>
          We have successfully helped businesses belonging to almost all
          industry verticals. Our dedicated developers can help you build
          industry-specific solutions that perfectly serve your business
          interests.
        </p>
      </div>

      <div className={styles.grid}>
        {industries.map((industry) => (
          <div key={industry.id} className={styles.card}>
            <div className={styles.iconWrapper}>{industry.icon}</div>
            <h3 className={styles.industryName}>{industry.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustryGrid;
