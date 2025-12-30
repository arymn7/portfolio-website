import React, { useEffect, useRef } from 'react';
import './Education.css';

const Education = () => {
  const educationRef = useRef(null);

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

    if (educationRef.current) {
      observer.observe(educationRef.current);
    }

    return () => {
      if (educationRef.current) {
        observer.unobserve(educationRef.current);
      }
    };
  }, []);

  const education = [
    {
      degree: 'Bachelor of Computer Science (Honours Co-op)',
      university: 'University of Waterloo',
      location: 'Waterloo, Ontario',
      period: '2025 - 2030',
      highlights: ['President\'s Scholarship of Distinction', '1A Term Distinction'],
      courses: [
        'Elementary Algorithm Design and Data Abstraction',
        'Designing Functional Programs',
        'Calculus 1 & 2',
        'Algebra with Proofs',
        'Linear Algebra 1',
        'Tools/Techniques for Software Development',
        'Introduction to Microeconomics'
      ]
    }
  ];

  return (
    <section id="education" className="education-section" ref={educationRef}>
      <div className="education-container">
        <div className="section-heading">
          <p className="section-eyebrow">Education</p>
          <h2>Academic background</h2>
        </div>
        <div className="education-list">
          {education.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="education-header">
                <div className="education-title">
                  <h3 className="education-degree">{edu.degree}</h3>
                  <p className="education-university">{edu.university}</p>
                  <p className="education-location">{edu.location}</p>
                </div>
                <span className="education-period">{edu.period}</span>
              </div>
              <div className="education-highlights">
                {edu.highlights.map((item) => (
                  <span key={item} className="education-pill">{item}</span>
                ))}
              </div>
              <div className="education-courses">
                <h4>Relevant Coursework</h4>
                <div className="course-tags">
                  {edu.courses.map((course) => (
                    <span key={course} className="course-tag">{course}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
