import React, { useEffect, useRef } from 'react';
import iconCpp from '../assets/tech/cpp.svg';
import iconPython from '../assets/tech/python.svg';
import iconJs from '../assets/tech/javascript.svg';
import iconSql from '../assets/tech/sql.svg';
import iconGit from '../assets/tech/git.svg';
import iconReact from '../assets/tech/react.svg';
import iconNode from '../assets/tech/nodejs.svg';
import iconLinux from '../assets/tech/linux.svg';
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

    const aboutElement = aboutRef.current;

    if (aboutElement) {
      observer.observe(aboutElement);
    }

    return () => {
      if (aboutElement) {
        observer.unobserve(aboutElement);
      }
    };
  }, []);

  const skills = [
    { name: 'Python', icon: iconPython },
    { name: 'JavaScript / TypeScript', icon: iconJs },
    { name: 'SQL', icon: iconSql },
    { name: 'C++', icon: iconCpp },
    { name: 'React', icon: iconReact },
    { name: 'Next.js', mark: 'N' },
    { name: 'FastAPI', mark: 'FA' },
    { name: 'Node.js', icon: iconNode },
    { name: 'PostgreSQL', mark: 'PG' },
    { name: 'MongoDB', mark: 'M' },
    { name: 'MCP', mark: 'MCP' },
    { name: 'CI/CD', mark: 'CI' },
    { name: 'Cloud Technologies', mark: 'CL' },
    { name: 'Git', icon: iconGit },
    { name: 'Linux', icon: iconLinux },
  ];

  return (
    <section id="about" className="about-section" ref={aboutRef}>
      <div className="about-container">
        <div className="section-heading">
          <p className="section-eyebrow">About</p>
          <h2>Turning real needs into dependable software</h2>
        </div>
        <div className="about-grid">
          <div className="about-copy">
            <p>
              I'm a Computer Science co-op student at the University of Waterloo with professional experience building and shipping software that improves everyday business workflows. I enjoy turning ambiguous requirements into practical products that are fast, reliable, and easy to use.
            </p>
            <p>
              My work spans full-stack applications, APIs, databases, automation, and AI-assisted tools. I care about measurable performance improvements, maintainable architecture, and close collaboration with the people who rely on the software I build.
            </p>
          </div>
          <div className="about-panels">
            <div className="about-panel">
              <h3>What I build</h3>
              <ul>
                <li>Full-stack applications for real business workflows</li>
                <li>High-performance APIs and database-backed systems</li>
                <li>Automation and AI-assisted document processing</li>
                <li>Developer tools for distributed AI agents</li>
              </ul>
            </div>
            <div className="about-panel">
              <h3>How I work</h3>
              <ul>
                <li>Start with user needs and measurable outcomes</li>
                <li>Profile performance and validate improvements</li>
                <li>Design for maintainability and clear ownership</li>
                <li>Collaborate closely and iterate with feedback</li>
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
                {skill.icon ? (
                  <img src={skill.icon} alt="" loading="lazy" />
                ) : (
                  <span className="skill-mark" aria-hidden="true">{skill.mark}</span>
                )}
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



