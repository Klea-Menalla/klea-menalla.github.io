import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce application with payment integration, user authentication, and admin dashboard.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com',
      demo: 'https://example.com',
      image: 'project1',
    },
    {
      title: 'Task Management App',
      description:
        'A collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.',
      tech: ['React', 'TypeScript', 'Firebase', 'Material-UI'],
      github: 'https://github.com',
      demo: 'https://example.com',
      image: 'project2',
    },
    {
      title: 'Weather Dashboard',
      description:
        'A beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.',
      tech: ['React', 'API Integration', 'Chart.js', 'CSS3'],
      github: 'https://github.com',
      demo: 'https://example.com',
      image: 'project3',
    },
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <div className="project-placeholder">
                  <span>{project.image}</span>
                </div>
                <div className="project-overlay">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label="GitHub"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label="Live Demo"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

