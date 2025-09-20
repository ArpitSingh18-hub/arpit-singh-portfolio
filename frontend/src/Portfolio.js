import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/mockData';
import { 
  Github, 
  Mail, 
  Phone, 
  MapPin, 
  Download,
  ExternalLink,
  Code,
  Brain,
  Database,
  Cpu,
  Award,
  Calendar,
  GraduationCap,
  Briefcase,
  Star
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-white">Arpit Singh</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['about', 'education', 'skills', 'projects', 'certificates', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`px-3 py-2 text-sm font-medium capitalize transition-colors duration-200 ${
                      activeSection === item
                        ? 'text-yellow-400 border-b-2 border-yellow-400'
                        : 'text-gray-300 hover:text-yellow-400'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-16 min-h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className={`text-center ${isLoaded ? 'animate-fade-in' : ''}`}>
            <div className="relative inline-block mb-8">
              <div className="w-32 h-32 rounded-full bg-gradient-to-r from-yellow-400 to-green-400 p-1 mx-auto">
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                  <Code className="w-16 h-16 text-yellow-400" />
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-400 to-green-400 bg-clip-text text-transparent">
              {portfolioData.personal.name}
            </h1>
            
            <p className="text-xl md:text-2xl text-yellow-400 mb-8 animate-pulse">
              {portfolioData.personal.title}
            </p>
            
            <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              {portfolioData.personal.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="btn-primary px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/25">
                <Download className="w-5 h-5 mr-2 inline" />
                Download Resume
              </button>
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary px-8 py-4 border-2 border-gray-600 text-white hover:border-yellow-400 hover:text-yellow-400 rounded-xl transition-all duration-300 hover:scale-105"
              >
                <Github className="w-5 h-5 mr-2 inline" />
                View GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GraduationCap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-white mb-4">Education</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-green-400 mx-auto"></div>
          </div>
          
          <div className="space-y-8">
            {portfolioData.education.map((edu, index) => (
              <div
                key={edu.id}
                className={`glass-effect rounded-2xl p-8 hover-lift transition-all duration-300 ${
                  edu.type === 'college' ? 'border-l-4 border-yellow-400' : 'border-l-4 border-green-400'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white mb-2">{edu.institution}</h3>
                    <p className="text-lg text-yellow-400 mb-2">{edu.degree}</p>
                    <p className="text-green-400 font-semibold">Grade: {edu.grade}</p>
                  </div>
                  <div className="mt-4 md:mt-0 flex items-center text-gray-400">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>{edu.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Cpu className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-green-400 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(portfolioData.skills).map(([category, skills]) => (
              <div key={category} className="glass-effect rounded-2xl p-6 hover-lift transition-all duration-300">
                <div className="flex items-center mb-4">
                  {category === 'languages' && <Code className="w-6 h-6 text-yellow-400 mr-2" />}
                  {category === 'libraries' && <Brain className="w-6 h-6 text-yellow-400 mr-2" />}
                  {category === 'gui' && <ExternalLink className="w-6 h-6 text-yellow-400 mr-2" />}
                  {category === 'ide' && <Database className="w-6 h-6 text-yellow-400 mr-2" />}
                  <h3 className="text-xl font-semibold text-white capitalize">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-800 text-green-400 rounded-full text-sm border border-gray-700 hover:border-yellow-400 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Briefcase className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-green-400 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.projects.map((project) => (
              <div
                key={project.id}
                className={`glass-effect rounded-2xl p-6 hover-lift transition-all duration-300 ${
                  project.featured ? 'border-2 border-yellow-400/30' : ''
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-yellow-400 text-black rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                  {project.featured && <Star className="w-5 h-5 text-yellow-400" />}
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-800 text-green-400 rounded text-xs border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 bg-gray-800 text-gray-400 rounded text-xs">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
                
                <button className="w-full bg-gray-800 hover:bg-yellow-400 hover:text-black text-white py-2 rounded-lg transition-all duration-300 flex items-center justify-center">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-white mb-4">Certificates</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-green-400 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolioData.certificates.map((cert) => (
              <div
                key={cert.id}
                className="glass-effect rounded-2xl p-6 hover-lift transition-all duration-300 border-l-4 border-green-400"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">{cert.title}</h3>
                    <p className="text-yellow-400 mb-1">{cert.issuer}</p>
                    <span className="px-2 py-1 bg-gray-800 text-green-400 rounded text-xs">
                      {cert.category}
                    </span>
                  </div>
                  <Award className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Mail className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-white mb-4">Let's Connect</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-green-400 mx-auto"></div>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="glass-effect rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  className="flex items-center p-4 bg-gray-800 rounded-xl hover:bg-yellow-400 hover:text-black transition-all duration-300 group"
                >
                  <Mail className="w-6 h-6 mr-3 text-yellow-400 group-hover:text-black" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-gray-400 group-hover:text-gray-700">{portfolioData.personal.email}</p>
                  </div>
                </a>
                
                <a
                  href={`tel:${portfolioData.personal.phone}`}
                  className="flex items-center p-4 bg-gray-800 rounded-xl hover:bg-green-400 hover:text-black transition-all duration-300 group"
                >
                  <Phone className="w-6 h-6 mr-3 text-green-400 group-hover:text-black" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-sm text-gray-400 group-hover:text-gray-700">{portfolioData.personal.phone}</p>
                  </div>
                </a>
                
                <div className="flex items-center p-4 bg-gray-800 rounded-xl">
                  <MapPin className="w-6 h-6 mr-3 text-blue-400" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-sm text-gray-400">{portfolioData.personal.location}</p>
                  </div>
                </div>
                
                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-gray-800 rounded-xl hover:bg-purple-500 hover:text-white transition-all duration-300 group"
                >
                  <Github className="w-6 h-6 mr-3 text-purple-400 group-hover:text-white" />
                  <div>
                    <p className="font-medium">GitHub</p>
                    <p className="text-sm text-gray-400 group-hover:text-gray-200">View Profile</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400 mb-2">&copy; 2025 Arpit Singh. All rights reserved.</p>
            <p className="text-sm text-gray-500">Built with React & passion for technology</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;