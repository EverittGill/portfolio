import React from 'react';
import { Container } from 'react-bootstrap';
import Pdf from '../../assets/Everitt_Gill_Resume_B&W_2023.docx.pdf';
import ResumeImg from '../../assets/images/Everitt_Gill_Resume_B&W_2023.docx-1.jpg';

function Resume() {
  return (
    <>
      <div>
        <section className="site-section" id="resume">
          <h2 className="h2-header">My Resume</h2>
          <Container className="d-flex justify-center max-w-full">
            <a 
              href={Pdf} 
              download="Everitt_Gill_Resume_B&W_2023.docx.pdf" 
              style={{display: 'flex', justifyContent: 'center', width: '100%'}}
            >
              <img 
                className='image-fluid resume-image border-solid border-4 border-black rounded-lg' 
                src={ResumeImg} 
                id="resume-image" 
                alt="Everitt Gill resume" 
              />
            </a>
          </Container>
        </section>
      </div>
    </>
  );
}

export default Resume;


