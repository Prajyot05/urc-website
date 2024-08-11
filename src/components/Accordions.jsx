import React, { useState } from 'react';

const Accordions = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (id) => {
    setActiveSection(activeSection === id ? null : id);
  };

  return (
    <div className="p-8">
      <section
        className={`accordion bg-white max-w-lg mb-4 rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out ${activeSection === 'overview' ? 'h-auto' : 'h-16'}`}
        id="overview"
      >
        <h1
          className="title text-black text-2xl font-bold p-4 cursor-pointer flex items-center"
          onClick={() => toggleSection('overview')}
        >
          <a href="#overview">Who can participate ?</a>
          <span
            className={`ml-3 transition-transform duration-300 ${activeSection === 'overview' ? 'rotate-90' : ''}`}
            style={{ display: 'inline-block', transformOrigin: 'center' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-4 h-4 fill-current">
              <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
            </svg>
          </span>
        </h1>
        <div className={`content p-4 overflow-hidden transition-max-height duration-500 ease-in-out ${activeSection === 'overview' ? 'max-h-screen' : 'max-h-0'}`}>
          <p className="text-base leading-relaxed mb-4">
            All members should be from the same college
          </p>
        </div>
      </section>

      <section
        className={`accordion bg-white max-w-lg mb-4 rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out ${activeSection === 'how-does-it-work' ? 'h-auto' : 'h-16'}`}
        id="how-does-it-work"
      >
        <h1
          className="title text-black text-2xl font-bold p-4 cursor-pointer flex items-center"
          onClick={() => toggleSection('how-does-it-work')}
        >
          <a href="#how-does-it-work">What is the registration fee?</a>
          <span
            className={`ml-3 transition-transform duration-300 ${activeSection === 'how-does-it-work' ? 'rotate-90' : ''}`}
            style={{ display: 'inline-block', transformOrigin: 'center' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-4 h-4 fill-current">
              <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
            </svg>
          </span>
        </h1>
        <div className={`content p-4 overflow-hidden transition-max-height duration-500 ease-in-out ${activeSection === 'how-does-it-work' ? 'max-h-screen' : 'max-h-0'}`}>
          <p className="text-base leading-relaxed mb-4">
            Registration fees will be Rs 1500 only
          </p>
        </div>
      </section>

      <section
        className={`accordion bg-white max-w-lg mb-4 rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out ${activeSection === 'inspiration' ? 'h-auto' : 'h-16'}`}
        id="inspiration"
      >
        <h1
          className="title text-black text-2xl font-bold p-4 cursor-pointer flex items-center"
          onClick={() => toggleSection('inspiration')}
        >
          <a href="#inspiration">How can I register to competition?</a>
          <span
            className={`ml-3 transition-transform duration-300 ${activeSection === 'inspiration' ? 'rotate-90' : ''}`}
            style={{ display: 'inline-block', transformOrigin: 'center' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-4 h-4 fill-current">
              <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
            </svg>
          </span>
        </h1>
        <div className={`content p-4 overflow-hidden transition-max-height duration-500 ease-in-out ${activeSection === 'inspiration' ? 'max-h-screen' : 'max-h-0'}`}>
          <p className="text-base leading-relaxed mb-4">
          You have to register from our official website of ...
          </p>
        </div>
      </section>
    </div>
  );
};

export default Accordions;