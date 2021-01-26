import React from 'react';

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'


function NavBar(){
    return(
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">  
    <Navbar.Brand href="#home">BlogApp</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#Allblog">All Blogs</Nav.Link>
      <Nav.Link href="#Create">New Blog</Nav.Link>
    </Nav>
    <Form inline >
      <NavDropdown title="Search filters" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Title</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Author</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Content</NavDropdown.Item>
      </NavDropdown>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>
    </Navbar.Collapse> 
  </Navbar>
    )
}

export default NavBar;