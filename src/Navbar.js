import React from 'react';

const Navbar = () => {
  const scrollToSection = (sectionId, margin=0) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const scrollTop = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: scrollTop - margin,
        behavior: 'smooth',
      });
    }
  };

  const handleAboutMeClick = () => {
    scrollToSection('about-me',50);
  };

  const handleSkillsClick = () => {
    scrollToSection('skills',50);
  };

  const handleHomeClick = () => {
    scrollToSection('home',50);
  };

  const handleEducationClick = () => {
    scrollToSection('education',50);
  };

  const handleProjectsClick = () => {
    scrollToSection('contact',50);
  };



  return (
    <div className="navbar">
      <button onClick={handleAboutMeClick}>About Me</button>
      <button onClick={handleSkillsClick}>Skills</button>
      <button onClick={handleHomeClick}>Home</button>
      <button onClick={handleEducationClick}>Education</button>
      <button onClick={handleProjectsClick}>Contact Me</button>
    </div>
  );
};

export default Navbar;
