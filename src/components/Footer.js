
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';





function Footer() {
  return (
    <>
    <div className="footer items-center">
      <ul className="contact-items items-center" id="contact">
        <li className='items-center'>
          <a className="items-center" href="https://www.instagram.com/everitt_gill/">
          <FontAwesomeIcon icon={faInstagram} size="2xl" />
          </a>
        </li>
        <li>
          <a href="https://github.com/EverittGill">
          <FontAwesomeIcon icon={ faGithub } size="2xl" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/everitt-gill-574226a0/">
          <FontAwesomeIcon icon={ faLinkedin } size="2xl" />
          </a>
        </li>
      </ul>
    </div>
    </>
  );
}

export default Footer;

