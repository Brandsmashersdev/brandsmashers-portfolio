// components/DeveloperSkills.js
import React from 'react';

import styles from '@/styles/HireDevelopers/DeveloperSkills.module.css';
const DeveloperSkills = () => {
  const skillCategories = [
    // Row 1
    ['HTML', 'CSS', 'MySQL', 'APIs and web services', 'Database management skills', 'Python', 'Java'],
    // Row 2
    ['JavaScript', 'C#', 'C++', 'Ruby', 'PHP', 'Visual Studio', 'IntelliJ IDEA', 'Eclipse'],
    // Row 3
    ['PyCharm', 'Git', 'SVN', 'Mercurial', 'Maven', 'Gradle', 'Front end development'],
    // Row 4
    ['Back end development', 'Jenkins', 'Travis CI', 'CircleCI', 'Docker', 'Kubernetes', 'Terraform', 'Ansible'],
    // Row 5
    ['Puppet', 'Chef', 'AWS', 'Azure', 'Google Cloud Platform', 'JUnit', 'NUnit', 'Selenium'],
    // Row 6
    ['JMeter', 'LoadRunner', 'SonarQube', 'ESLint', 'PMD', 'Singleton', 'MVC'],
    // Row 7
    ['Monolithic Architectures', 'OWASP Top Ten', 'SSL/TLS', 'OAuth', 'JWT', 'Bash', 'PowerShell']
  ];

  const getTagColor = (index) => {
    const colors = [
      'primary', // Brightest yellow
      'secondary', // Light yellow
      'tertiary', // Medium yellow
    ];
    return colors[index % colors.length];
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Various Skills that Remote Developers Possess</h1>
      <p className={styles.subheading}>
        Access the talent network of <span className={styles.highlight}>1M+ skilled professionals</span> with <span className={styles.highlight}>100+ skill sets</span>
      </p>

      <div className={styles.skillsContainer}>
        {skillCategories.map((row, rowIndex) => (
          <div key={rowIndex} className={styles.skillRow}>
            {row.map((skill, index) => (
              <div 
                key={`${rowIndex}-${index}`} 
                className={`${styles.skillTag} ${styles[getTagColor(index)]}`}
              >
                {skill}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeveloperSkills;