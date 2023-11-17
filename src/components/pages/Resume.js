
import React from 'react';
import { Container } from 'react-bootstrap';
import Pdf from '../../assets/Everitt_Gill_Resume_Fall2023.pdf';
import ResumeImg1 from '../../assets/images/Everitt_Gill_Resume_Fall_2023.jpeg';

function Resume() {
  return (
    <>
      <div>
        <section className="site-section" id="resume">
          <h2 className="h2-header">My Resume</h2>
          <h6>Click To Download</h6>
          <Container className="justify-center max-w-full">
            <div className='flex flex-col md:flex-row'>
              <a 
                className='flex flex-col md:flex-row justify-center items-center'
                href={Pdf} 
                download="Everitt_Gill_Resume_Fall_2023.pdf" 
                // style={{display: 'flex', justifyContent: 'center', width: '100%'}}
              >
                <img 
                  className='image-fluid resume-image border-solid border-4 border-black rounded-lg md:w-1/2' 
                  src={ResumeImg1} 
                  id="resume-image" 
                  alt="Everitt Gill resume" 
                />
                {/* <img 
                  className='image-fluid resume-image border-solid border-4 border-black rounded-lg md:w-1/2' 
                  src={ResumeImg2} 
                  id="resume-image" 
                  alt="Everitt Gill resume" 
                /> */}
              </a>
            </div>
          </Container>
        </section>
      </div>
    </>
  );
}

export default Resume;










// import React from 'react';
// import { Container } from 'react-bootstrap';
// import Pdf from '../../assets/Everitt_Gill_Resume_2_Pages.pdf';
// import ResumeImg1 from '../../assets/images/Everitt_Gill_Resume_2_Pages-page-001.jpg';
// import ResumeImg2 from '../../assets/images/Everitt_Gill_Resume_2_Pages-page-002.jpg';

// function Resume() {
//   return (
//     <>
//       <div>
//         <section className="site-section" id="resume">
//           <h2 className="h2-header">My Resume</h2>
//           <Container className="justify-center max-w-full">
//             <div className='flex flex-col md:flex-row'>
//             <a 
//               href={Pdf} 
//               download="Everitt_Gill_Resume_B&W_2023.docx.pdf" 
//               style={{display: 'flex', justifyContent: 'center', width: '100%'}}
//             >
//               <img 
//                 className='image-fluid resume-image border-solid border-4 border-black rounded-lg' 
//                 src={ResumeImg1} 
//                 id="resume-image" 
//                 alt="Everitt Gill resume" 
//               />
//               <img 
//                 className='image-fluid resume-image border-solid border-4 border-black rounded-lg' 
//                 src={ResumeImg2} 
//                 id="resume-image" 
//                 alt="Everitt Gill resume" 
//               />
//             </a>
//             </div>
//           </Container>
//         </section>
//       </div>
//     </>
//   );
// }

// export default Resume;


