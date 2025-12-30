import React, { useEffect, useRef } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Education from './components/Education';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const cursorRef = useRef(null);
  const highlighterRef = useRef(null);
  const rafRef = useRef(null);
  const hoverCheckRef = useRef(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let isHovering = false;

    const updateCursor = () => {
      if (cursorRef.current && highlighterRef.current) {
        cursorRef.current.style.left = `${mouseX}px`;
        cursorRef.current.style.top = `${mouseY}px`;
        highlighterRef.current.style.left = `${mouseX}px`;
        highlighterRef.current.style.top = `${mouseY}px`;
      }
      rafRef.current = requestAnimationFrame(updateCursor);
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Throttle hover detection
      if (!hoverCheckRef.current) {
        hoverCheckRef.current = setTimeout(() => {
          const target = document.elementFromPoint(e.clientX, e.clientY);
          const isInteractive = target?.closest('a, button, .contact-button, .resume-button, .github-link, .scroll-indicator, .navbar-menu a, [onclick]');
          const newHovering = !!isInteractive;
          
          if (newHovering !== isHovering && cursorRef.current) {
            isHovering = newHovering;
            if (isHovering) {
              cursorRef.current.classList.add('hover');
            } else {
              cursorRef.current.classList.remove('hover');
            }
          }
          hoverCheckRef.current = null;
        }, 50);
      }
    };

    rafRef.current = requestAnimationFrame(updateCursor);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      if (hoverCheckRef.current) {
        clearTimeout(hoverCheckRef.current);
      }
    };
  }, []);

  return (
    <div className="App">
      <div 
        ref={highlighterRef}
        className="cursor-highlighter"
      ></div>
      <div 
        ref={cursorRef}
        className="custom-cursor"
      ></div>
      <Navbar />
      <Home />
      <Projects />
      <Education />
      <About />
      <Contact />
    </div>
  );
}

export default App;

