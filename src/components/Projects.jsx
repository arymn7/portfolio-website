import React, { useEffect, useRef, useState } from 'react';
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

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
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
        { name: 'Python', icon: '/tech/python.svg' },
        { name: 'NumPy', icon: '/tech/numpy.svg' },
        { name: 'Pandas', icon: '/tech/pandas.svg' },
        { name: 'Scikit Learn', icon: '/tech/scikitlearn.svg' },
        { name: 'Git', icon: '/tech/git.svg' }
      ],
      githubLink: 'https://github.com/arymn7/heart_disease_prediction',
      image: '/project-heart.png',
      imageAlt: 'Heart disease prediction dashboard illustration'
    },
    {
      title: 'BlackJack Game',
      description: 'Built an interactive Blackjack game in Python using Pygame with real-time rendering, dealer logic, hit/stand actions, score calculation, and bust detection, along with scalable card handling and multiple game states for smooth gameplay and replay support.',
      techStack: [
        { name: 'Python', icon: '/tech/python.svg' },
        { name: 'Pygame', icon: '/tech/pygame.png' },
        { name: 'Git', icon: '/tech/git.svg' }
      ],
      githubLink: 'https://github.com/arymn7/blackjack-pygame',
      image: '/project-blackjack.png',
      imageAlt: 'Playing cards illustration for a Blackjack game'
    },
    {
      title: 'Car Marketplace',
      description: 'A terminal-based Java application that allows users to list, search, buy, and sell vehicles through a text-based interface. Built with object-oriented design.',
      techStack: [
        { name: 'Java', icon: '/tech/java.svg' },
        { name: 'Git', icon: '/tech/git.svg' }
      ],
      githubLink: 'https://github.com/arymn7/car-marketplace',
      image: '/project-car.png',
      imageAlt: 'Car marketplace project preview'
    },
    {
      title: 'Portfolio Website',
      description: 'Designed and built a responsive personal portfolio website with smooth section navigation, project highlights, and a clean visual system.',
      techStack: [
        { name: 'React', icon: '/tech/react.svg' },
        { name: 'JavaScript', icon: '/tech/javascript.svg' },
        { name: 'CSS', icon: '/tech/css.svg' },
        { name: 'HTML', icon: '/tech/html.svg' },
        { name: 'Git', icon: '/tech/git.svg' }
      ],
      githubLink: 'https://github.com/arymn7/portfolio-website',
      image: '/project-portfolio.png',
      imageAlt: 'Portfolio website layout illustration'
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
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.imageAlt} loading="lazy" />
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.techStack.map((tech) => (
                    <div key={tech.name} className="project-tech-item">
                      <img src={tech.icon} alt={`${tech.name} logo`} loading="lazy" />
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
              </div>
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
                href="/Resume_AS.pdf"
                className="resume-action"
                target="_blank"
                rel="noopener noreferrer"
              >
                View externally
              </a>
              <a
                href="/Resume_AS.pdf"
                className="resume-action secondary"
                download
              >
                Download PDF
              </a>
            </div>
            <div className="resume-frame">
              <iframe
                title="Resume PDF"
                src="/Resume_AS.pdf#view=fitH"
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
