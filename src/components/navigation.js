
//import all other components
// import Projects from "./pages/Projects";
// import About from "./pages/About";
// import Resume from "./pages/Resume"
// import Contact from "./pages/Contact"
// import Portfolio from "./Portfolio";

import Nav from 'react-bootstrap/Nav';


// function Navigation ({currentPage, handlePageChange}) {


//     return (
//         <>
//         <nav>
//         <div class="container-top">
//          <ul class="nav-items">
//             <li><a href="#about-me" onClick={ () => handlePageChange ("about me")} >About Me</a></li>
//             <li><a href="#my-work" onClick={ () => handlePageChange ("projects")}>projects</a></li>
//             <li><a href="#resume" onClick={ () => handlePageChange ("contact")} >Contact</a></li>
//             <li><a href="#contact" onClick={ () => handlePageChange ("resume")} >Resume</a></li>
//          </ul>
//         </div>
//     </nav>
//         </>
//     )
// }

// export default Navigation;



function Navigation({currentPage, handlePageChange}) {
  return (
    <Nav variant="pills" defaultActiveKey="#about-me">
      <Nav.Item>
        <Nav.Link href="#about-me" onClick={ () => handlePageChange ("about me")}>About Me</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="#projects" onClick={ () => handlePageChange ("projects")}>Projects</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="resume" onClick={ () => handlePageChange ("resume")} >Resume</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="contact" onClick={ () => handlePageChange ("contact")} >Contact Me</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navigation;


// function Page({ currentPage }) {

//     const renderPage = () => {
//       switch (currentPage.name) {
//         case 'about me':
//           return <About />;
//         case 'portfolio':
//           return <Portfolio />;
//         case 'contact':
//           return <Contact />;
//         case 'resume':
//           return <Resume />;
//         default:
//           return <About />;
//       }
//     };
  
//     return (
//       <section>
//         <h2>{capitalizeFirstLetter(currentPage.name)}</h2>
//         <PageContent>{renderPage()}</PageContent>
//       </section>
//     );
//   }



//   assignment 24 navTabs and Portfolio Container contain how to do this part.