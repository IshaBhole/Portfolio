import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-darker py-8">
      <div className="container mx-auto px-6 text-center">
          <p className="text-slate-400 mb-2">
            © {currentYear} Isha Bhole. All rights reserved.
          </p>
      </div>
    </footer>
  );
};

export default Footer;