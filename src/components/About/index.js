import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAws, faCss3, faHtml5, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const aboutArray = 'About Me'.split("")

  useEffect(() => {
    const timerId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  
    return () => {
      clearTimeout(timerId)
    }
  }, [])

  return (
    <>
    <div className='container about-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters 
            letterClass={letterClass}
            strArray={aboutArray}
            idx={15}
          />
        </h1>
        <p>
          As a Computer Science graduate from Penn State University at University Park, I have acquired
          a strong foundation in programming, software engineering, and system design. I 
          have worked as a DevOps Engineer and currently working as a DevSecOps Engineer 
          at Lockheed Martin Space, where I have gained valuable experience in designing 
          and implementing secure and scalable cloud infrastructures. My experience has 
          equipped me with the necessary skills to ensure that software is developed and 
          deployed efficiently and securely.
        </p>
        <p>
          I am passionate about learning and keeping up with new technologies and industry
          trends. My proficiency in Python and Bash, coupled with my experience in Java,
          JavaScript, React, HTML, and CSS, make me well-rounded in software development.
          I am constantly seeking opportunities to learn, grow, and hone my skills, and
          I am confident in my ability to adapt to new environments and technologies.
        </p>
        <p>
          As a remote software engineer, I am eager to work on challenging projects that
          enable me to apply my knowledge and skills in a dynamic and collaborative 
          environment. My experience and skills set me up to be an asset to any team that
          I work with, and I am excited to contribute my expertise and passion to your organization.
        </p>
      </div>

      <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#306998" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faAws} color="#FF9900" />
            </div>
          </div>
        </div>
      </div>
      <Loader type='pacman'/>
    </>
  )
}

export default About