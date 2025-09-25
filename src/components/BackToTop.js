import React from 'react';

const BackToTop = ({ show }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 w-12 h-12 bg-primary rounded-full shadow-lg transition-all duration-300 z-40 flex items-center justify-center hover:bg-secondary ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16 pointer-events-none'
      }`}
      aria-label="Back to top"
    >
      <i className="fas fa-chevron-up text-white"></i>
    </button>
  );
};

export default BackToTop;