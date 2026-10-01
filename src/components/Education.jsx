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

    const educationElement = educationRef.current;

    if (educationElement) {
      observer.observe(educationElement);
    }

    return () => {
      if (educationElement) {
        observer.unobserve(educationElement);
      }
    };
  }, []);

  const education = [
    {
      degree: 'Honours Bachelor of Computer Science (Co-op)',
      university: 'University of Waterloo',
      location: 'Waterloo, Ontario',
      period: 'Sep 2025 - Apr 2030 (expected)',
      highlights: ['President\'s Scholarship of Distinction'],
      courses: [
        'Object-Oriented Programming',
        'Data Structures & Algorithms',
        'Computation',
        'Probability',
        'Linux'
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
