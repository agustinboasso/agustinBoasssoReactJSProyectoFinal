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
          <Nav.Link as={Link} to="/">Todo</Nav.Link>
          <Nav.Link as={Link} to="category/accesories">Accesorios</Nav.Link>
          <NavDropdown title="Cartas" id="navbarScrollingDropdown">
            <NavDropdown.Item as={Link} to="category/teamRocket">Team Rocket</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="category/baseSet">
              Base Set
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="category/jungle">
              Jungla
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="category/sealed">
            Sellado
          </Nav.Link>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
    <div>
        <Link to="/cart">
            <CartWidget/>
        </Link>
            
    </div>
  </Navbar>
    
    
    
    
    
    
    //NavBar anterior
    
    /*<div className="navbar">
        <div>
            logo
        </div>
        <div>
            <ul className="options">
                
                <li>
                    <NavLink  className={({isActive}) => isActive ? 'active' : 'inactive'} to="/">
                        Todo
                    </NavLink>
                </li>
                <li>
                    <NavLink  className={({isActive}) => isActive ? 'active' : 'inactive'} to="category/sealed">
                        Sellado
                    </NavLink>
                </li>
                <li>
                    <NavLink  className={({isActive}) => isActive ? 'active' : 'inactive'}   to="category/baseSet">
                        Base Set
                    </NavLink>
                </li>
                <li>
                    <NavLink  className={({isActive}) => isActive ? 'active' : 'inactive'} to="/category/jungle">
                        Jungla
                    </NavLink>
                </li>
                <li>
                    <NavLink  className={({isActive}) => isActive ? 'active' : 'inactive'} to="/category/teamRocket">
                        Team Rocket
                    </NavLink>
                </li>
                
            </ul>
        </div>
        <div>
            <Link to="/cart">
                <CartWidget/>
            </Link>
            
        </div>
    </div>*/
  )
};

export default NavBar;