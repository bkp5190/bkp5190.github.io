import './index.scss'
import { Link, NavLink } from 'react-router-dom';
import LogoS from '../../assets/images/b.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import React, { useEffect, useState } from 'react';


const Sidebar = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  
  useEffect(() => {
    const timerId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  
    return () => {
      clearTimeout(timerId)
    }
  }, [])

  return (
    <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoS} alt="logo"/>
      <span className={`sub-logo ${letterClass} _12`}>Boney</span>
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#19543E"/>
      </NavLink>
      <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
        <FontAwesomeIcon icon={faUser} color="#19543E"/>
      </NavLink>
      <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
        <FontAwesomeIcon icon={faEnvelope} color="#19543E"/>
      </NavLink>
    </nav>
    <ul>
      <li>
        <a 
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/boney-patel-a9691514b/">
          <FontAwesomeIcon icon={faLinkedin} color="#19543E"/>
        </a>
      </li>
      <li>
        <a 
          target="_blank"
          rel="noreferrer"
          href="https://github.com/bkp5190">
          <FontAwesomeIcon icon={faGithub} color="#19543E"/>
        </a>
      </li>
    </ul>
  </div>
  );
}

export default Sidebar