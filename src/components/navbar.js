import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';
import SearchBar from './SearchBar';


function NavScrollExample(mode) {
  return (
    <Navbar className={ mode ? `${mode}`:"text-color" } expand="lg">
      <Container fluid>
        <Navbar.Brand className="text-color green" href="#"><h2>TextUtils</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className="text-color" href="#action1">Home</Nav.Link>
            <Nav.Link className="text-color" href="#action2">AboutUS</Nav.Link>
          </Nav>
          <Nav.Link className="text-color" href="#action2">Actions</Nav.Link>
          <Nav.Link className="text-color" href="#action2">More Option</Nav.Link>
          <Nav.Link className="text-color" href="#action2"><SearchBar/></Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;