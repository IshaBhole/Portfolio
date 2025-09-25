import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Multi Class Animal Classification",
      description: "Image classification model using MobileNetV2 to identify 90 animal species with high accuracy.",
      image: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
      technologies: ["Python", "MobileNetV2", "Transfer Learning", "Kaggle"],
      githubUrl: "https://github.com/IshaBhole/MultiClassAnimalClassification.git"
    },
    {
      id: 2,
      title: "Malware Classification using Machine Learning",
      description: "Team project classifying malware using ML/DL techniques including CNN, LSTM, and Random Forest.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      technologies: ["Python", "Machine Learning", "Deep Learning", "CNN", "LSTM", "Scikit-learn", "TensorFlow"],    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A responsive portfolio website built with React and TailwindCSS.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80",
      technologies: ["React", "TailwindCSS", "CSS Animations", "Responsive Design"],
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-darker">
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
            My Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="project-card rounded-xl overflow-hidden card-hover">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-slate-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-slate-700 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      className="text-primary hover:text-secondary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github"></i> Code
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

export default Projects;