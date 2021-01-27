import React from 'react';
import "./css/navbar.css"
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
//import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import {Link} from "react-router-dom"
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
function NavBar(){
    return(
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">  
    <Link to="/" className="Link"><h2>BlogApp</h2></Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link><Link to="/allblogs" className="Link">All Blogs</Link></Nav.Link>
      <Nav.Link><Link to="/create" className="Link">Create a Blog</Link></Nav.Link>
      <Nav.Link><Link to="/create" className="Link">Update</Link></Nav.Link>
    </Nav>
    <DropdownButton id="dropdown-basic-button" title="Filter By">
  <Dropdown.Item href="#/action-1">Author</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Title</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Description</Dropdown.Item>
</DropdownButton>
    <Form inline >
      <FormControl type="text"  placeholder="Search" className="mr-sm-2" />
      <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled tooltip-bottom">Search!</Tooltip>}>
      <Button variant="outline-primary">Search</Button>
      </OverlayTrigger>
    </Form>
    </Navbar.Collapse> 
  </Navbar>
    )
}

export default NavBar;