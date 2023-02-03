import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


export default function Header() {

    function BasicExample() {
        return (
          <Navbar bg="dark" expand="lg" style={{borderRadius:'0px 40px'}}>
            <Container >
              <Navbar.Brand style={{color:"whitesmoke"}}><Link to='/' style={{textDecoration: 'none', color: 'inherit'}}>Felipe Gomes</Link></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link className="link-ligth" style={{color:"whitesmoke", textDecoration:'none'}}><Link to='/Habilidades' style={{textDecoration: 'none', color: 'inherit'}}>Skills</Link></Nav.Link>
                  <NavDropdown title="Contato" id="basic-nav-dropdown">
                    <NavDropdown.Item className="dropdown-item" href='https://www.linkedin.com/in/felipe-gs/' target='_blanck'>Linkedin</NavDropdown.Item>
                    <NavDropdown.Item href="https://www.instagram.com/_lipe_gs/" target='_blanck'>
                      Instagram
                    </NavDropdown.Item>
    
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        );
      }
  return (
    <BasicExample/>
  )
}
