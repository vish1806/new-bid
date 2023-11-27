import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import image from './image.png';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Layout from '../Components/Layout/Layout';


function Contact() {
  return (
    <>
      <Layout title={"Contact Us - BidHub"}>
        <h2 className='titlee'>
            Know the creators...
        </h2>
        <div className='flexx'>
          <div className="card mx-4" styles="width: 18rem;">
            <img src={image} className="card-img-top" alt="person" height="200px" />
            <div className="card-body">
              <h5 className="card-title">Nithin Pranav</h5>
              <a href="https://www.linkedin.com/your-linkedin-profile" className="github mx-3" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
              <a href="https://www.linkedin.com/your-linkedin-profile" className="mail mx-3" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} size="2x" /></a>
              <a href="https://www.linkedin.com/your-linkedin-profile" className="linkedin mx-3" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
            </div>
          </div>
          <div className="card mx-4" styles="width: 18rem;">
            <img src={image} className="card-img-top" alt="person" height="200px" />
            <div className="card-body">
              <h5 className="card-title">Subaraksha RT</h5>
              <a href="https://www.linkedin.com/your-linkedin-profile" className="github mx-3" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
              <a href="https://www.linkedin.com/your-linkedin-profile" className="mail mx-3" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} size="2x" /></a>
              <a href="https://www.linkedin.com/your-linkedin-profile" className="linkedin mx-3" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
            </div>
          </div>
          <div className="card mx-4" styles="width: 18rem;">
            <img src={image} className="card-img-top" alt="person" height="200px" />
            <div className="card-body">
              <h5 className="card-title">Vishal Ganapathy</h5>
              <a href="https://www.linkedin.com/your-linkedin-profile" className="github mx-3" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
              <a href="https://www.linkedin.com/your-linkedin-profile" className="mail mx-3" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} size="2x" /></a>
              <a href="https://www.linkedin.com/your-linkedin-profile" className="linkedin mx-3" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
            </div>
          </div>
          <div className="card mx-4" styles="width: 18rem;">
            <img src={image} className="card-img-top" alt="person" height="200px" />
            <div className="card-body">
              <h5 className="card-title">Geedhavarshini Balaji</h5>
              <a href="https://www.linkedin.com/your-linkedin-profile" className="github mx-3" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
              <a href="https://www.linkedin.com/your-linkedin-profile" className="mail mx-3" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} size="2x" /></a>
              <a href="https://www.linkedin.com/your-linkedin-profile" className="linkedin mx-3" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
            </div>
          </div>
          <div className="card mx-4" styles="width: 18rem;">
            <img src={image} className="card-img-top" alt="person" height="200px" />
            <div className="card-body">
              <h5 className="card-title">Athish MJ</h5>
              <a href="https://www.linkedin.com/your-linkedin-profile" className="github mx-3" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
              <a href="https://www.linkedin.com/your-linkedin-profile" className="mail mx-3" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} size="2x" /></a>
              <a href="https://www.linkedin.com/your-linkedin-profile" className="linkedin mx-3" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
export default Contact;