import React from 'react'
import "./SliderButton.css"

function SliderButton({text}) {
  const scrollToSection = (sectionClass) => {
    const section = document.querySelector(sectionClass);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
      <div className="sidebar-options">
          <h4 className="sidebar-option" onClick={() => scrollToSection(`.${text.toLowerCase()}-page`)}>
              {text}
          </h4>
          <h4 className="sidebar-option" onClick={() => scrollToSection(`.${text.toLowerCase()}-page`)}>
              {text}
          </h4>
      </div>
  );
}

export default SliderButton