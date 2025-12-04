import {
  FaReact,
  FaJs,
  FaNode,
  FaPython,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
} from 'react-icons/fa'
import { SiTypescript, SiR, SiMysql } from 'react-icons/si'
import './Skills.css'

const Skills = () => {
  const skills = [
    { name: 'React', icon: <FaReact />, level: 90 },
    { name: 'JavaScript', icon: <FaJs />, level: 85 },
    { name: 'TypeScript', icon: <SiTypescript />, level: 80 },
    { name: 'Node.js', icon: <FaNode />, level: 85 },
    { name: 'Python', icon: <FaPython />, level: 75 },
    { name: 'HTML5', icon: <FaHtml5 />, level: 95 },
    { name: 'CSS3', icon: <FaCss3Alt />, level: 90 },
    { name: 'R', icon: <SiR />, level: 80 },
    { name: 'SQL', icon: <SiMysql />, level: 75 },
    { name: 'Git', icon: <FaGitAlt />, level: 85 },
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <h3 className="skill-name">{skill.name}</h3>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: `${skill.level}%` }}
                >
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

