import React from 'react'
import { Container } from 'react-bootstrap';
import ResumeImg from '../../assets/images/Everitt-Gill-Resume.jpg'

function Resume() {
  return (
    <>
    <div>
    <section class="site-section" id="resume">
        <h2 class="h2-header">My Resume</h2>
        <Container className="d-flex justify-content-center">
          {/* add an href in an anchor tag that has the file Everitt-Gill-Resume */}
          <a href="../assets/Everitt-Gill-Resume" download="Everitt-Gill-Resume.pdf">
            <img className='image-fluid resume-image' src= { ResumeImg } id="resume-image" alt="Everitt Gill resume" />
          </a>
          </Container>
          </section>
    </div>
    </>
  )
}

export default Resume