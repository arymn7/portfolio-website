import React, { useEffect, useRef } from 'react';
import './Experience.css';

const Experience = () => {
  const experienceRef = useRef(null);

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

    const experienceElement = experienceRef.current;

    if (experienceElement) {
      observer.observe(experienceElement);
    }

    return () => {
      if (experienceElement) {
        observer.unobserve(experienceElement);
      }
    };
  }, []);

  const experiences = [
    {
      company: 'Mercury Mortgages Inc.',
      location: 'Mississauga, Ontario',
      role: 'Software Engineering Intern',
      period: 'May 2026 - Aug 2026',
      highlights: [
        'Developed and launched an internal invoice management tool supporting 30,000+ invoices annually with FastAPI, Python, and PostgreSQL.',
        'Reduced document search and load times by 78%, from 5.0 seconds to 1.1 seconds, by optimizing API endpoints and database queries.',
        'Automated invoice data entry with AI-based document scanning and added approval, vendor management, and audit-log workflows.'
      ]
    },
    {
      company: 'FMSS Engineering Club',
      location: 'Brampton, Ontario',
      role: 'Full Stack Software Developer',
      period: 'Sep 2024 - Jun 2025',
      highlights: [
        'Built a shared Node.js, React, and MySQL application for 25+ members to register for events, track attendance, and manage participation.',
        'Added Python validation that reduced duplicate records by 33% and automated 5+ weekly attendance reports.'
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section" ref={experienceRef}>
      <div className="experience-container">
        <div className="section-heading">
          <p className="section-eyebrow">Experience</p>
          <h2>Building software for real workflows</h2>
        </div>
        <div className="experience-list">
          {experiences.map((experience) => (
            <article key={`${experience.company}-${experience.role}`} className="experience-card">
              <div className="experience-header">
                <div>
                  <h3>{experience.role}</h3>
                  <p className="experience-company">{experience.company}</p>
                  <p className="experience-location">{experience.location}</p>
                </div>
                <span className="experience-period">{experience.period}</span>
              </div>
              <ul className="experience-highlights">
                {experience.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
