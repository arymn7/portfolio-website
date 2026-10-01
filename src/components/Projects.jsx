import React, { useEffect, useRef, useState } from 'react';
import projectHeart from '../assets/project-heart.png';
import projectRentscope from '../assets/project-rentscope.webp';
import projectCar from '../assets/project-car.png';
import projectAgentigram from '../assets/project-agentigram.jpeg';
import resumePdf from '../assets/Resume_Aryaman_Sharma.pdf';
import iconPython from '../assets/tech/python.svg';
import iconNumpy from '../assets/tech/numpy.svg';
import iconPandas from '../assets/tech/pandas.svg';
import iconScikitLearn from '../assets/tech/scikitlearn.svg';
import iconGit from '../assets/tech/git.svg';
import iconJava from '../assets/tech/java.svg';
import iconNext from '../assets/tech/nextjs.svg';
import iconTypeScript from '../assets/tech/typescript.svg';
import iconFastApi from '../assets/tech/fastapi.svg';
import iconGemini from '../assets/tech/gemini.svg';
import iconMongoDb from '../assets/tech/mongodb.svg';
import iconMcp from '../assets/tech/mcp.svg';
import iconNode from '../assets/tech/nodejs.svg';
import iconHolepunch from '../assets/tech/holepunch.png';
import './Projects.css';

const Projects = () => {
  const projectsRef = useRef(null);
  const [activeTab, setActiveTab] = useState('projects');

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

    const projectsElement = projectsRef.current;

    if (projectsElement) {
      observer.observe(projectsElement);
    }

    return () => {
      if (projectsElement) {
        observer.unobserve(projectsElement);
      }
    };
  }, []);

  const tabs = [
    { id: 'projects', label: 'Projects' },
    { id: 'resume', label: 'Resume' }
  ];

  const projects = [
    {
      title: 'Heart Disease Prediction',
      description: 'Developed a machine learning pipeline using logistic regression to predict heart-disease risk from 300+ patient records, achieving ~85% accuracy with an 80/20 train/test split.',
      techStack: [
        { name: 'Python', icon: iconPython },
        { name: 'NumPy', icon: iconNumpy },
        { name: 'Pandas', icon: iconPandas },
        { name: 'Scikit Learn', icon: iconScikitLearn },
        { name: 'Git', icon: iconGit }
      ],
      githubLink: 'https://github.com/arymn7/heart_disease_prediction',
      image: projectHeart,
      imageAlt: 'Heart disease prediction dashboard illustration'
    },
    {
      title: 'RentScope',
      description: 'RentScope is a map-first assistant that helps students choose neighbourhoods by visualizing rent, commute, safety signals, and amenities; producing ranked, explainable recommendations instead of scattered listings.',
      techStack: [
        { name: 'Next.js', icon: iconNext, monochrome: true },
        { name: 'TypeScript', icon: iconTypeScript, monochrome: true },
        { name: 'FastAPI', icon: iconFastApi, monochrome: true },
        { name: 'Gemini', icon: iconGemini, monochrome: true },
        { name: 'MongoDB', icon: iconMongoDb, monochrome: true },
        { name: 'MCP', icon: iconMcp, monochrome: true }
      ],
      githubLink: 'https://github.com/arymn7/rentscope',
      image: projectRentscope,
      imageAlt: 'RentScope project preview'
    },
    {
      title: 'Car Marketplace',
      description: 'A terminal-based Java application that allows users to list, search, buy, and sell vehicles through a text-based interface. Built with object-oriented design.',
      techStack: [
        { name: 'Java', icon: iconJava },
        { name: 'Git', icon: iconGit }
      ],
      githubLink: 'https://github.com/arymn7/car-marketplace',
      image: projectCar,
      imageAlt: 'Car marketplace project preview'
    },
    {
      title: 'Agentigram',
      description: 'Built a peer-to-peer coordination layer that helps AI coding agents across different computers detect conflicting changes, negotiate contracts, and enforce file ownership before merge conflicts occur. Winner of Tether’s Best Sovereign App at Hack the North 2026.',
      techStack: [
        { name: 'TypeScript', icon: iconTypeScript, monochrome: true },
        { name: 'Node.js', icon: iconNode },
        { name: 'Next.js', icon: iconNext, monochrome: true },
        { name: 'MCP', icon: iconMcp, monochrome: true },
        { name: 'Hyperswarm', icon: iconHolepunch },
        { name: 'Hypercore', icon: iconHolepunch }
      ],
      githubLink: 'https://github.com/ParthB21/agentigram',
      image: projectAgentigram,
      imageAlt: 'Agentigram logo with connected agents graphic'
    }
  ];

  return (
    <section id="projects" className="projects-section" ref={projectsRef}>
      <div className="projects-container">
        <div className="section-heading">
          <p className="section-eyebrow">Projects</p>
          <h2>Selected work</h2>
        </div>
        <div className="projects-tabs" role="tablist" aria-label="Projects tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              id={`${tab.id}-tab`}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`${tab.id}-panel`}
              className={`projects-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div
          className="projects-tab-panel"
          role="tabpanel"
          id="projects-panel"
          aria-labelledby="projects-tab"
          hidden={activeTab !== 'projects'}
        >
          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.imageAlt} loading="lazy" />
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.techStack.map((tech) => (
                    <div key={tech.name} className="project-tech-item">
                      <img
                        src={tech.icon}
                        alt=""
                        className={tech.monochrome ? 'monochrome' : ''}
                        loading="lazy"
                      />
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
                <a
                  href={project.githubLink}
                  className="github-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  View on GitHub
                </a>
              </article>
            ))}
          </div>
        </div>
        <div
          className="projects-tab-panel"
          role="tabpanel"
          id="resume-panel"
          aria-labelledby="resume-tab"
          hidden={activeTab !== 'resume'}
        >
          <div className="resume-viewer">
            <div className="resume-actions">
              <a
                href={resumePdf}
                className="resume-action"
                target="_blank"
                rel="noopener noreferrer"
              >
                View externally
              </a>
              <a
                href={resumePdf}
                className="resume-action secondary"
                download="Aryaman_Sharma_Resume.pdf"
              >
                Download PDF
              </a>
            </div>
            <div className="resume-frame">
              <iframe
                title="Resume PDF"
                src={`${resumePdf}#view=fitH`}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;





