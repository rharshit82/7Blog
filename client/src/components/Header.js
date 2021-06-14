import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPlus,
  faSignInAlt,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons'
import siteLogo from '../7BlogLogo.png'

const Header = ({ isAuth }) => {
  return (
    <>
      <Navbar className='mb-3 py-2' bg='dark' expand='lg' variant='dark'>
        <LinkContainer to='/'>
          <Navbar.Brand className='ms-3'>
            <div
              className='d-flex text-center justify-content-center align-items-center'
              style={{ cusor: 'pointer' }}
            >
              <img src={siteLogo} style={{ height: '80px' }} alt='7Blog' />
              <h1>7Blog</h1>
            </div>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto me-3'>
            {isAuth ? (
              <LinkContainer to='/logout'>
                <Nav.Link className='px-3'>
                  {' '}
                  <FontAwesomeIcon icon={faSignInAlt} />
                  Logout
                </Nav.Link>
              </LinkContainer>
            ) : (
              <LinkContainer to='/login'>
                <Nav.Link className='px-3'>
                  {' '}
                  <FontAwesomeIcon icon={faSignInAlt} />
                  Login
                </Nav.Link>
              </LinkContainer>
            )}

            <LinkContainer to='/register'>
              <Nav.Link className='px-3'>
                {' '}
                <FontAwesomeIcon icon={faUserPlus} />
                Register
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/add_post'>
              <Nav.Link className='px-3'>
                {' '}
                <FontAwesomeIcon icon={faPlus} />
                Add Post
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Header
