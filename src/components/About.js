import React from 'react';

const About = () => {
  const experiences = [
    {
      title: "AI & Cloud Technologies",
      company: "Edunet Foundation-IBM SkillsBuild",
      period: "September - Present",
      description: "Currently learning advanced AI and cloud computing concepts through IBM SkillsBuild program. Gaining hands-on experience with machine learning algorithms, cloud architecture, and modern AI frameworks.",
      side: "right"
    },
    {
      title: "Foundations of Artificial Intelligence",
      company: "Edunet Foundation",
      period: "April 2025 (4-weeks)",
      description: "Gained foundational knowledge in AI algorithms, data preprocessing, supervised and unsupervised learning, and practical applications of artificial intelligence in real-world scenarios.",
      side: "left"
    },
    {
      title: "Web Development",
      company: "PrimaThink Technologies Pvt. Ltd. Amravati",
      period: "Jun-Jul 2022",
      description: "Worked on project to enhance web development programming, becoming proficient in creating well-structured, semantic HTML layouts for enhanced accessibility and improved user experience.",
      side: "right"
    }
  ];

  return (
    <section id="about" className="py-20 bg-darker">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="text-3xl font-bold mb-6"
            style={{
              background: 'linear-gradient(90deg, #FF6EC7, #FFF95B, #6EFF95)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
              fontWeight: 700,
            }}
          >
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>
        
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-white">Who am I?</h3>
            <p className="text-slate-400 mb-8 max-w-3xl">
              With a deep interest in Artificial Intelligence, I am dedicated to exploring how intelligent systems can transform the world. Currently pursuing a B.Tech. in Artificial Intelligence, I have developed a strong foundation in machine learning, data analytics, and modern AI technologies through academic projects, internships, and hands-on experience.

              My journey includes building image and malware classification models using deep learning, participating in virtual AI internships, and contributing to web development projects. I am passionate about applying analytical thinking and problem-solving skills to real-world challenges, and I thrive in collaborative, innovative environments.

              Eager to continuously expand my knowledge in advanced AI fields such as deep learning, NLP, and computer vision, I look forward to contributing my skills and passion to projects that push the boundaries of what technology can achieve.

              Outside of tech, I am also a competitive chess player, which has helped me develop strong analytical and strategic thinking skills.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-2xl mx-auto">
              {/* Name, email, phone, and location removed as requested */}
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="https://drive.google.com/uc?export=download&id=1dsaPBhFdZL4mgb1g52FS6lwRbywb1Krt" 
                download="Isha_Bhole_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full font-medium gradient-btn"
              >
                Download Resume
              </a>
              <a href="#contact" className="px-6 py-3 rounded-full border border-primary text-primary font-medium hover:bg-primary/10 transition">
                Contact Me
              </a>
            </div>
          </div>
        </div>
        
        {/* Internship Timeline */}
        <div className="mt-20">
          <h3
            className="text-4xl font-bold mb-4 text-center"
            style={{
              background: 'linear-gradient(90deg, #FF6EC7, #FFF95B, #6EFF95)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
              fontWeight: 700,
            }}
          >
            My Internships
          </h3>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-1/2 h-full w-0.5 bg-primary/30 transform -translate-x-1/2"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="mb-8 flex justify-between items-center w-full timeline-item">
                {exp.side === 'left' ? (
                  <>
                    <div className="order-1 w-5/12 px-4 py-4 bg-dark rounded-lg shadow-lg dark-card">
                      <h4 className="text-lg font-bold mb-2">{exp.title}</h4>
                      <p className="text-sm text-slate-400 mb-2">{exp.company} • {exp.period}</p>
                      <p className="text-slate-300">{exp.description}</p>
                    </div>
                    <div className="order-1 w-5/12"></div>
                  </>
                ) : (
                  <>
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-4 py-4 bg-dark rounded-lg shadow-lg dark-card">
                      <h4 className="text-lg font-bold mb-2">{exp.title}</h4>
                      <p className="text-sm text-slate-400 mb-2">{exp.company} • {exp.period}</p>
                      <p className="text-slate-300">{exp.description}</p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;