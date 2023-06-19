import React from 'react';
import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HeaderFigure = styled.figure`
  text-align: center;
`;

const HeaderCaption = styled.figcaption`
  font-size: 24px;
  font-weight: 600;
  color: #333;
  opacity: 0;
  transform: translateY(20px);
  animation: ${slideIn} 0.2s forwards;
`;

function Header() {
  return (
    <HeaderFigure>
      <HeaderCaption>
        Everitt Gill Full Stack Web Developer
      </HeaderCaption>
    </HeaderFigure>
  );
}

export default Header;









// // this is the header component. It will render the header when used
// import Figure from 'react-bootstrap/Figure';

// function Header() {
//   return (
//     <Figure>
//       <Figure.Caption>
//         Everitt Gill Full Stack Web Developer
//       </Figure.Caption>
//     </Figure>
//   );
// }


// export default Header