import React, { useEffect, useRef } from 'react';
import iconC from '../assets/tech/C.svg';
import iconCpp from '../assets/tech/cpp.svg';
import iconPython from '../assets/tech/python.svg';
import iconJava from '../assets/tech/java.svg';
import iconHtml from '../assets/tech/html.svg';
import iconCss from '../assets/tech/css.svg';
import iconJs from '../assets/tech/javascript.svg';
import iconRacket from '../assets/tech/racket.svg';
import iconSql from '../assets/tech/sql.svg';
import iconGit from '../assets/tech/git.svg';
import iconPandas from '../assets/tech/pandas.svg';
import iconScikitLearn from '../assets/tech/scikitlearn.svg';
import iconNumpy from '../assets/tech/numpy.svg';
import iconPygame from '../assets/tech/pygame.png';
import iconReact from '../assets/tech/react.svg';
import iconNode from '../assets/tech/nodejs.svg';
import iconGithub from '../assets/tech/github.svg';
import iconVscode from '../assets/tech/vscode.svg';
import iconIntellij from '../assets/tech/intellij.svg';
import iconPycharm from '../assets/tech/pycharm.svg';
import iconLinux from '../assets/tech/linux.svg';
import iconVim from '../assets/tech/vim.svg';
import iconPowerbi from '../assets/tech/powerbi.svg';
import iconExcel from '../assets/tech/excel.svg';
import './About.css';

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  const skills = [
    { name: 'C', icon: iconC },
    { name: 'C++', icon: iconCpp },
    { name: 'Python', icon: iconPython },
    { name: 'Java', icon: iconJava },
    { name: 'HTML', icon: iconHtml },
    { name: 'CSS', icon: iconCss },
    { name: 'JavaScript', icon: iconJs },
    { name: 'Racket', icon: iconRacket },
    { name: 'SQL', icon: iconSql },
    { name: 'Git', icon: iconGit },
    { name: 'Pandas', icon: iconPandas },
    { name: 'Scikit Learn', icon: iconScikitLearn },
    { name: 'NumPy', icon: iconNumpy },
    { name: 'Pygame', icon: iconPygame },
    { name: 'React', icon: iconReact },
    { name: 'NodeJS', icon: iconNode },
    { name: 'GitHub', icon: iconGithub },
    { name: 'VS Code', icon: iconVscode },
    { name: 'IntelliJ IDEA', icon: iconIntellij },
    { name: 'PyCharm', icon: iconPycharm },
    { name: 'Linux', icon: iconLinux },
    { name: 'Vim', icon: iconVim },
    { name: 'Power BI', icon: iconPowerbi },
    { name: 'Excel', icon: iconExcel }
  ];

  return (
    <section id="about" className="about-section" ref={aboutRef}>
      <div className="about-container">
        <div className="section-heading">
          <p className="section-eyebrow">About</p>
          <h2>Focused on building intelligent systems</h2>
        </div>
        <div className="about-grid">
          <div className="about-copy">
            <p>
              I'm a Computer Science student who loves algorithms, data science, and machine learning, especially when they're used to solve real-world problems. I enjoy turning ideas into practical, well-structured software that feels intuitive to use and genuinely helps people.
            </p>
            <p>
              My work blends solid CS fundamentals with hands-on engineering experience. I've built machine-learning pipelines, interactive apps, and systems spanning Python, Java, and C++, and I care deeply about clean architecture, efficient data handling, and code quality. More than anything, I love learning, experimenting, and building tools that make a difference. 
            </p>
          </div>
          <div className="about-panels">
            <div className="about-panel">
              <h3>What I build</h3>
              <ul>
                <li>Machine-learning pipelines & data-driven applications</li>
                <li>Interactive software and games with polished user experience</li>
                <li>Backend systems and tooling that support real-world workflows</li>
                <li>Embedded & hardware-integrated projects (Arduino, C++)</li>
              </ul>
            </div>
            <div className="about-panel">
              <h3>How I work</h3>
              <ul>
                <li>Clear thinking, structured design, and incremental iteration</li>
                <li>Strong attention to detail and code quality</li>
                <li>Clean architecture & maintainability first</li>
                <li>Collaborative, Git-driven development workflow</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="skills-block">
          <div className="skills-header">
            <h3>Technology Stack</h3>
            <p>Tools and frameworks I use across projects.</p>
          </div>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div key={skill.name} className="skill-card">
                <img src={skill.icon} alt={`${skill.name} logo`} loading="lazy" />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;




