import React from 'react';

const Certificates = () => {

  const certificateCategories = {
    technical: [
      {
        id: 1,
        title: "RDBMS PostgreSQL",
        organization: "Spoken Tutorial Project, IIT Bombay",
        date: "2024",
        level: "Certificate",
        icon: "fas fa-database",
        color: "from-blue-500 to-purple-500"
      },
      {
        id: 2,
        title: "AWS Technical Essentials",
        organization: "Amazon Web Services",
        date: "July 2024",
        level: "Certificate",
        icon: "fas fa-cloud",
        color: "from-orange-500 to-yellow-500"
      },
      {
        id: 3,
        title: "AWS Cloud Practitioner Essentials",
        organization: "Amazon Web Services",
        date: "July 2024",
        level: "Certificate",
        icon: "fas fa-cloud",
        color: "from-purple-500 to-pink-500"
      },
      {
        id: 4,
        title: "Data Analytics and Visualization Job Simulation",
        organization: "Job Simulation Program",
        date: "July 2024",
        level: "Certificate",
        icon: "fas fa-chart-bar",
        color: "from-green-500 to-teal-500"
      },
      {
        id: 5,
        title: "Introduction to Cyber Security",
        organization: "Infosys Springboard",
        date: "April 2022",
        level: "Certificate",
        icon: "fas fa-shield-alt",
        color: "from-red-500 to-orange-500"
      },
      {
        id: 6,
        title: "PHP and MySQL Training",
        organization: "Spoken Tutorial Project, IIT Bombay",
        date: "June 2025",
        level: "Certificate",
        icon: "fas fa-code",
        color: "from-indigo-500 to-blue-500"
      }
    ]
  };

  return (
    <section id="certificates" className="py-20 bg-darker">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{
              background: 'linear-gradient(90deg, #FF6EC7, #FFF95B, #6EFF95)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
              fontWeight: 700,
            }}
          >
            My Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
        </div>

        {/* Certificate Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certificateCategories.technical.map((cert, index) => (
            <div
              key={cert.id}
              className="group relative bg-slate-800 rounded-2xl p-6 card-hover transform transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${cert.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${cert.color} flex items-center justify-center text-white text-xl shadow-lg`}>
                    <i className={cert.icon}></i>
                  </div>
                  <div className="text-right">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${cert.color} text-white`}>
                      {cert.level}
                    </span>
                    <p className="text-slate-500 text-sm mt-1">{cert.date}</p>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">
                  {cert.title}
                </h3>
                <p className="text-slate-400 font-medium mb-4">{cert.organization}</p>
                
                {/* View Certificate Link */}
                <div className="flex items-center justify-end">
                  {cert.pdfUrl && (
                    <a
                      href={cert.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`opacity-0 group-hover:opacity-100 transition-all duration-300 text-transparent bg-clip-text bg-gradient-to-r ${cert.color} hover:scale-110`}
                      title="View Certificate"
                    >
                      <i className="fas fa-eye"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;