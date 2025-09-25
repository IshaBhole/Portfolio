import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-darker relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10 animate-gradient-move bg-gradient-to-tr from-[#FF6EC7] via-[#FFF95B] to-[#6EFF95] opacity-60" style={{backgroundSize: '200% 200%'}}></div>
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-12 md:mb-0 flex items-center justify-center">
          <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-10 max-w-xl w-full">
            <h1
              className="gradient-text-portfolio mb-4 text-5xl font-bold"
              style={{
                background: 'linear-gradient(90deg, #FF6EC7, #FFF95B, #6EFF95)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent',
                fontWeight: 700,
              }}
            >
              Hi, I'm Isha
            </h1>
            <p className="text-lg mb-8 text-slate-300">
              Advancing digital innovation with artificial intelligence, data science, and user-centered design.
            </p>
            <div className="flex space-x-4">
              <a href="#contact" className="px-6 py-3 rounded-full font-medium gradient-btn">
                Hire Me
              </a>
              <a href="#projects" className="px-6 py-3 rounded-full border border-primary text-primary font-medium hover:bg-primary/10 transition">
                View Work
              </a>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary blur-xl opacity-20"></div>
            <img 
              src={`${process.env.PUBLIC_URL}/profile.jpeg`}
              alt="Isha Bhole" 
              className="relative w-full h-full object-cover rounded-full border-4 border-dark floating lavender-glow"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;