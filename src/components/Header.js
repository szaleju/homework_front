import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Header() {
  const logoutHandler = () => {
    localStorage.removeItem("refresh");
    localStorage.removeItem("access");
    localStorage.removeItem("exp");
  };

  return (
    <header>
      <Navbar bg='light' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer className='mx-3' to='/ingredients'>
            <Button variant='info' className='btn-sm' onClick={logoutHandler}>
              Logout
            </Button>
          </LinkContainer>
          <LinkContainer to='/'>
            <Navbar.Brand>Cook Book</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
              <LinkContainer to='/recipes'>
                <Nav.Link>Recipes</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/ingredients'>
                <Nav.Link>Ingredients</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
