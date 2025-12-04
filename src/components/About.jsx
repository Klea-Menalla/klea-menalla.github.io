import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate developer with a love for creating beautiful and
              functional web applications. With expertise in modern web
              technologies, I bring ideas to life through clean code and
              thoughtful design.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community.
            </p>
            <div className="about-stats">
              <div className="stat">
                <h3><img src="src/images/ut.png" alt='ut' className='university-logo'/></h3>
                <p>Faculty Of Natural Sciences</p>
              </div>
              <div className="stat">
                <h3>Bachelor</h3>
                <p>Mathematic and Computer Engineering</p>
                <p>2022-2025</p>
              </div>
              <div className="stat">
                <h3>Master</h3>
                <p>Informatics</p>
                <p>2025-Now</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

