import React, { useState } from 'react';
import NavTabs from './Navigation';
import About from './pages/About'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import Projects from './pages/Projects'



export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');
  
    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    // const renderPage = () => {
    //   if (currentPage === 'About') {
    //     return <About />;
    //   }
    //   if (currentPage === 'Contact') {
    //     return <Contact />;
    //   }
    //   if (currentPage === 'Blog') {
    //     return <Projects />;
    //   }
    //   return <About />;
    // };

        const renderPage = () => {
        switch (currentPage) {
          case 'about me':
            return <About />;
          case 'projects':
            return <Projects />;
          case 'contact':
            return <Contact />;
          case 'resume':
            return <Resume />;
          default:
            return <About />;
        }
      };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div>
        {/* We are passing the currentPage from state and the function to update it */}
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        {/* Here we are calling the renderPage method which will return a component  */}
        {renderPage()}
      </div>
    );
  }
  