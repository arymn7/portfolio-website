import React, { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const aboutRef = useRef(null);
  const publicUrl = process.env.PUBLIC_URL || '';

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
    { name: 'C', icon: `${publicUrl}/tech/c.svg` },
    { name: 'C++', icon: `${publicUrl}/tech/cpp.svg` },
    { name: 'Python', icon: `${publicUrl}/tech/python.svg` },
    { name: 'Java', icon: `${publicUrl}/tech/java.svg` },
    { name: 'HTML', icon: `${publicUrl}/tech/html.svg` },
    { name: 'CSS', icon: `${publicUrl}/tech/css.svg` },
    { name: 'JavaScript', icon: `${publicUrl}/tech/javascript.svg` },
    { name: 'Racket', icon: `${publicUrl}/tech/racket.svg` },
    { name: 'SQL', icon: `${publicUrl}/tech/sql.svg` },
    { name: 'Git', icon: `${publicUrl}/tech/git.svg` },
    { name: 'Pandas', icon: `${publicUrl}/tech/pandas.svg` },
    { name: 'Scikit Learn', icon: `${publicUrl}/tech/scikitlearn.svg` },
    { name: 'NumPy', icon: `${publicUrl}/tech/numpy.svg` },
    { name: 'Pygame', icon: `${publicUrl}/tech/pygame.png` },
    { name: 'React', icon: `${publicUrl}/tech/react.svg` },
    { name: 'NodeJS', icon: `${publicUrl}/tech/nodejs.svg` },
    { name: 'GitHub', icon: `${publicUrl}/tech/github.svg` },
    { name: 'VS Code', icon: `${publicUrl}/tech/vscode.svg` },
    { name: 'IntelliJ IDEA', icon: `${publicUrl}/tech/intellij.svg` },
    { name: 'PyCharm', icon: `${publicUrl}/tech/pycharm.svg` },
    { name: 'Linux', icon: `${publicUrl}/tech/linux.svg` },
    { name: 'Vim', icon: `${publicUrl}/tech/vim.svg` },
    { name: 'Power BI', icon: `${publicUrl}/tech/powerbi.svg` },
    { name: 'Excel', icon: `${publicUrl}/tech/excel.svg` }
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
              I’m a Computer Science student who loves algorithms, data science, and machine learning, especially when they’re used to solve real-world problems. I enjoy turning ideas into practical, well-structured software that feels intuitive to use and genuinely helps people.
            </p>
            <p>
              My work blends solid CS fundamentals with hands-on engineering experience. I’ve built machine-learning pipelines, interactive apps, and systems spanning Python, Java, and C++, and I care deeply about clean architecture, efficient data handling, and code quality. More than anything, I love learning, experimenting, and building tools that make a difference. 
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
