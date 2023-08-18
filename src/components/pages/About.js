import { Figure } from "react-bootstrap";
// import { Image } from 'react-bootstrap';

// function About() {
//   return (
//     <>
//     <section class="about-me-bio" id="about-me">
//       <h2>About Me</h2>
//       <div>
//         <Figure>
//           <Figure.Image
//             width={171}
//             height={180}
//             alt="171x180"
//             src="https://avatars.githubusercontent.com/u/116043918?v=4"
//           />
//         </Figure>
//         <p id="about-me-text">
//           I am a versatile and dynamic professional with a passion for sales,
//           web development, and cooking. With over 5 years of experience in
//           sales, I have honed my skills in relationship building and
//           problem-solving, consistently exceeding my targets and delivering
//           outstanding results. My expertise in web development allows me to
//           bring a unique and innovative approach to sales, using technology to
//           improve the customer experience. I have a strong understanding of web
//           design principles, coding languages, and software development
//           methodologies, and I am able to create user-friendly, accessible, and
//           aesthetically pleasing websites that are optimized for search engines.
//           I am a quick learner and always eager to stay up to date with the
//           latest technologies and trends in web development. In my free time, I
//           indulge in my love for cooking and am known for creating memorable
//           dining experiences for friends and family. I have a keen eye for
//           detail and a passion for experimenting with new recipes, ingredients,
//           and cooking techniques. My cooking skills range from preparing classic
//           dishes to experimenting with fusion cuisine, and I am always looking
//           for new and exciting ways to satisfy my customers' cravings.
//         </p>
//       </div>
//     </section>
//     </>
//   );
// }

// export default About;

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ContainerFluidExample() {
  return (
    <Container fluid>
      <Row>
        <Col> </Col>
        <Col xs={8}>
          <section class="about-me-bio" id="about-me" style={{display: 'flex', flexDirection: "column", justifyContent: 'center', width: '100%'}}>
            <h2 style={{textAlign: 'center'}}>About Me</h2>
            <div>
              <div class="about-me-image text-center">
                <Figure>
                  <Figure.Image
                    roundedCircle
                    width={250}
                    height={250}
                    alt="171x180"
                    src="https://avatars.githubusercontent.com/u/116043918?v=4"
                  />
                </Figure>
              </div>
              <p id="about-me-text">
              I am a tech-enthusiast and Full Stack Web Developer with a unique blend of interpersonal and technological skills. As a graduate of the Georgia Institute of Technology's Full Stack Web Development Bootcamp, I took pride in developing "Market Dash," an AI-powered marketing tool tailored for independent farmers market vendors. Proficient in MERN, JavaScript, HTML, CSS, and with a strong grasp on Real Estate and Ethereum, I'm passionate about crafting technology solutions centered around user needs. While my professional journey initiated as a Realtor, marked by roles within my own enterprise Everitt Gill Real Estate and the real estate technology firm, Redfin, I’m now dedicated to the tech industry, particularly in using my skills to simplify user experiences. Outside of coding, my passions include cooking, traveling, ceramics, writing, and exercising.
              </p>
            </div>
          </section>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default ContainerFluidExample;
