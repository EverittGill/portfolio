
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
// import { faEnvelope, faGithub, faLinkedin, faPhone } from '@fortawesome/free-solid-svg-icons';
// Or, if you prefer brand icons:
// import { faEnvelope, faGithub, faLinkedin, faPhone } from '@fortawesome/free-brands-svg-icons';



// Specify all properties: name, family, style





function Footer() {
  return (
    <>
    <div className="footer">
      <ul className="contact-items" id="contact">
        <li>
          <a href="https://www.instagram.com/everitt_gill/">
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







// function Footer() {
//     return(
//     <>

//      <section class="site-section" id="black-text">
//         <h2 class="h2-header">Contact Me</h2>
//         <ul class="contact-items" id="contact">
//             <li><a href="mailto:eg.everittgill@gmail.com">Email</a></li>
//             <li><a href="https://github.com/EverittGill">Github</a></li>
//             <li><a href="https://www.linkedin.com/in/everitt-gill-574226a0/">Linkedin</a></li>
//             <li><a href="tel:+17068184445">Call Me</a></li>
//         </ul>
//     </section>



//     <div>
//      <footer>
//         <p>made in 2023 by Everitt Gill</p>
//     </footer>
//     </div>
//     </>
//     )
// }

// export default Footer;