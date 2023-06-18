// this is the header component. It will render the header when used
import Figure from 'react-bootstrap/Figure';

function Header() {
  return (
    <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src="https://avatars.githubusercontent.com/u/116043918?s=400&u=95f9bc20bca929c41b61914d401ebf155eef841a&v=4"
      />
      <Figure.Caption>
        Everitt Gill. Full Stack Web Developer
      </Figure.Caption>
    </Figure>
  );
}


export default Header