import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
const Header = () => {
  return (
    <>
      <Navbar className='mb-3 py-2' bg='dark' expand='lg' variant='dark'>
        <Navbar.Brand className='ms-3' href='#home'>
          7Blog
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto me-3'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#link'>Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Header
