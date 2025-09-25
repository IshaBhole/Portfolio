import React, { useEffect, useState } from 'react';

const Skills = () => {
  const [skillsAnimated, setSkillsAnimated] = useState(false);

  const technicalSkills = [
    { name: 'HTML & CSS', level: 95 },
    { name: 'React', level: 60 },
    { name: 'Python', level: 70 }
  ];

  const softSkills = [
    { name: 'Communication', level: 90 },
    { name: 'Problem Solving', level: 85 },
    { name: 'Teamwork', level: 90 },
    { name: 'Creativity', level: 75 }
  ];

  const tools = [
    { name: 'HTML5', icon: 'fab fa-html5', color: 'text-orange-500' },
    { name: 'CSS3', icon: 'fab fa-css3-alt', color: 'text-blue-500' },
    { name: 'React', icon: 'fab fa-react', color: 'text-blue-400' },
    { name: 'Git', icon: 'fab fa-git-alt', color: 'text-orange-600' },
    { name: 'Figma', icon: 'fab fa-figma', color: 'text-purple-500' },
    { name: 'VS Code', icon: 'fas fa-terminal', color: 'text-gray-300' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!skillsAnimated) {
        const skillsSection = document.getElementById('skills');
        const skillsSectionTop = skillsSection?.offsetTop || 0;
        const windowHeight = window.innerHeight;
        
        if (window.scrollY > skillsSectionTop - windowHeight + 200) {
          setSkillsAnimated(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [skillsAnimated]);

  const SkillBar = ({ skill, animated }) => (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-medium">{skill.name}</span>
        <span>{skill.level}%</span>
      </div>
      <div className="skill-bar">
        <div 
          className="skill-progress" 
          style={{ width: animated ? `${skill.level}%` : '0%' }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="text-4xl font-bold mb-4"
            style={{
              background: 'linear-gradient(90deg, #FF6EC7, #FFF95B, #6EFF95)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
              fontWeight: 700,
            }}
          >
            My Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Technical Skills</h3>
            {technicalSkills.map((skill, index) => (
              <SkillBar key={index} skill={skill} animated={skillsAnimated} />
            ))}
          </div>
          
          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Soft Skills</h3>
            {softSkills.map((skill, index) => (
              <SkillBar key={index} skill={skill} animated={skillsAnimated} />
            ))}
          </div>
        </div>
        
        {/* Tools & Technologies */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Tools & Technologies
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {tools.map((tool, index) => (
              <div key={index} className="flex flex-col items-center p-6 bg-slate-800 rounded-lg card-hover">
                <i className={`${tool.icon} text-4xl ${tool.color} mb-2`}></i>
                <span>{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;