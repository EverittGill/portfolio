
//import all other components
import Container from "./container";
import Mywork from "./mywork";
import About from "./about";
import Resume from "./resume"
import Contact from "./contact"
import Portfolio from "./portfolio";

function Navigation () {

    const renderPage = () => {
        switch (currentPage.name) {
          case 'about me':
            return <About />;
          case 'porfolio':
            return <Portfolio />;
          case 'contact':
            return <Contact />;
          case 'resume':
            return <Resume />;
          default:
            return <About />;
        }
      };

// remove image from nav bar and put it in the header
    return (
        <>
        <nav>
        <div class="container-top">
         <ul class="nav-items">
            <li><a href="#about-me">About Me</a></li>
            <li><a href="#my-work">My Work</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
         </ul>
        </div>
    </nav>
        </>
    )
}

export default Navigation;


function Page({ currentPage }) {

    const renderPage = () => {
      switch (currentPage.name) {
        case 'about me':
          return <About />;
        case 'portfolio':
          return <Portfolio />;
        case 'contact':
          return <Contact />;
        case 'resume':
          return <Resume />;
        default:
          return <About />;
      }
    };
  
    return (
      <section>
        <h2>{capitalizeFirstLetter(currentPage.name)}</h2>
        <PageContent>{renderPage()}</PageContent>
      </section>
    );
  }



//   assignment 24 navTabs and Portfolio Container contain how to do this part.