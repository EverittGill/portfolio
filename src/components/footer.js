
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
// import { faEnvelope, faGithub, faLinkedin, faPhone } from '@fortawesome/free-solid-svg-icons';
// Or, if you prefer brand icons:
// import { faEnvelope, faGithub, faLinkedin, faPhone } from '@fortawesome/free-brands-svg-icons';



// Specify all properties: name, family, style





function Footer() {
  return (
    <>
      {/* ... your code ... */}

      <ul className="contact-items" id="contact">
        <li>
          <a href="mailto:eg.everittgill@gmail.com">
          <FontAwesomeIcon icon={ faGithub } size="lg" />
          </a>
        </li>
        <li>
          <a href="https://github.com/EverittGill">
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/everitt-gill-574226a0/">
            {/* <FontAwesomeIcon icon={faLinkedin} /> */}
          </a>
        </li>
        <li>
          <a href="tel:+17068184445">
          </a>
        </li>
      </ul>

      {/* ... your code ... */}
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