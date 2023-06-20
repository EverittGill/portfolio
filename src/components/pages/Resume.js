import React from 'react'
import { Container } from 'react-bootstrap';

function Resume() {
  return (
    <>
    <div>
    <section class="site-section" id="resume">
        <h2 class="h2-header">My Resume</h2>
        <Container className="d-flex justify-content-center">
          <a href="/assets/Everitt-Gill-Resume.pdf" download="Everitt-Gill-Resume.pdf">
            <img className='image-fluid resume-image' src="https://github.com/EverittGill/Everitt-Gill-Webiste/blob/main/images/EverittGillResume.jpg?raw=true" id="resume-image" alt="Everitt Gill resume" />
          </a>
          </Container>
          </section>
    </div>
    </>
  )
}

export default Resume