import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title fade-in-up">
            Hi, I'm <span className="highlight">Klea Menalla</span>
          </h1>
          <h2 className="hero-subtitle fade-in-up">
            Full Stack Developer
          </h2>
          <p className="hero-description fade-in-up">
            I create beautiful, functional, and user-centered digital experiences.
            Welcome to my portfolio!
          </p>
          <div className="hero-buttons fade-in-up">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </div>
          <div className="hero-social fade-in-up">
            <a
              href="https://github.com/Klea-Menalla"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/klea-menalla-3a2ba8314"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="#contact"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
        <div className="hero-image fade-in">
          <div className="hero-avatar">
            <div className="avatar-placeholder">
              <span className='img-wrapper'>
                <img src="src/images/profile.jpeg" alt="img" className='profile-img'/>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

