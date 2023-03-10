import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



import './NavBar.css'
import  CartWidget  from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    
    <Navbar bg="light" expand="lg">
    
    <Container fluid>
      <Navbar.Brand as={Link} to="/"><img src="./images/logo.png" alt="PokeShopTCG" width='75px'/></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          
          <Nav.Link as={Link} to="category/accesories">Accesorios</Nav.Link>
          <NavDropdown title="Cartas" id="navbarScrollingDropdown">
            <NavDropdown.Item as={Link} to="category/teamRocket">Team Rocket</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="category/baseSet">
              Base Set
            </NavDropdown.Item>
            
            <NavDropdown.Item as={Link} to="category/jungle">
              Jungla
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="category/sealed">
            Sellado
          </Nav.Link>
        </Nav>
        
          
      </Navbar.Collapse>
    </Container>
    <div>
        <Link to="/cart">
            <CartWidget/>
        </Link>
            
    </div>
  </Navbar>
    
  )
};

export default NavBar;