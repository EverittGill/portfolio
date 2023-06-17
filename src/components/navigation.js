
//import all other components
// import Projects from "./pages/Projects";
// import About from "./pages/About";
// import Resume from "./pages/Resume"
// import Contact from "./pages/Contact"
// import Portfolio from "./Portfolio";




function Navigation ({currentPage, handlePageChange}) {

    // const renderPage = () => {
    //     switch (currentPage) {
    //       case 'about me':
    //         return <About />;
    //       case 'porfolio':
    //         return <Portfolio />;
    //       case 'contact':
    //         return <Contact />;
    //       case 'resume':
    //         return <Resume />;
    //       default:
    //         return <About />;
    //     }
    //   };

// remove image from nav bar and put it in the header
    return (
        <>
        <nav>
        <div class="container-top">
         <ul class="nav-items">
            <li><a href="#about-me" onClick={ () => handlePageChange ("about me")} >About Me</a></li>
            <li><a href="#my-work" onClick={ () => handlePageChange ("projects")}>projects</a></li>
            <li><a href="#resume" onClick={ () => handlePageChange ("contact")} >Contact</a></li>
            <li><a href="#contact" onClick={ () => handlePageChange ("resume")} >Resume</a></li>
         </ul>
        </div>
    </nav>
        </>
    )
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