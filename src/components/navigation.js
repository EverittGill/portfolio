




import Nav from 'react-bootstrap/Nav';

function Navigation({ currentPage, handlePageChange }) {
  return (
    <Nav className="navigation" variant="pills" defaultActiveKey="#about-me">
      <Nav.Item>
        <Nav.Link href="#about-me" onClick={() => handlePageChange("about me")}>
          About Me
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="#projects" onClick={() => handlePageChange("projects")}>
          Projects
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="resume" onClick={() => handlePageChange("resume")}>
          Resume
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="contact" onClick={() => handlePageChange("contact")}>
          Contact Me
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navigation;
