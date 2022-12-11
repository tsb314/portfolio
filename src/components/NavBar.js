import { useState } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { HashLink } from 'react-router-hash-link'

export const NavBar = () => {

  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expand="lg" fixed="top" collapseOnSelect className="navbar" expanded={expanded}>
      <Container className="navcontainer">
        <Navbar.Brand className="logo" href="/#home">
            Tia Brimer<br/>
            <span>front end web developer</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}>
            <span className="navbar-toggler-icon nav-menu"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="navoptions">
            <Nav.Link as={HashLink} smooth to="/#home" className="navitem" onClick={() => setExpanded(false)}>Home</Nav.Link>
            <Nav.Link as={HashLink} smooth to="/#about" className="navitem" onClick={() => setExpanded(false)}>About</Nav.Link>
            <Nav.Link as={HashLink} smooth to="/#projects" className="navitem" onClick={() => setExpanded(false)}>Projects</Nav.Link>
            <Nav.Link as={HashLink} smooth to="/#contact" className="navitem" onClick={() => setExpanded(false)}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}