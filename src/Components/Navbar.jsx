import React from 'react';
import "./css/navbar.css"
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
//import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import {Link} from "react-router-dom"

function NavBar(){
    return(
      <Navbar bg="success" variant="dark" expand="lg" sticky="top">  
    <Link to="/" className="Link">BlogApp</Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link><Link to="/allblogs" className="Link">All Blogs</Link></Nav.Link>
      <Nav.Link href="#Create">Create a  Blog</Nav.Link>
    </Nav>
    <Form inline >
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-dark">Search</Button>
    </Form>
    </Navbar.Collapse> 
  </Navbar>
    )
}

export default NavBar;