import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
const Header = () => {
  // { isAuth, setIsAuth }
  // useEffect(() => {
  //   const userInfo = localStorage.getItem('userInfo')
  //   if (userInfo) {
  //     setIsAuth(true)
  //   }
  // }, [setIsAuth])
  return (
    <>
      <Navbar className='mb-3 py-2' bg='dark' expand='lg' variant='dark'>
        <LinkContainer to='/'>
          <Navbar.Brand className='ms-3'>7Blog</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto me-3'>
            {/* {isAuth ? (
              <LinkContainer to='/logout'>
                <Nav.Link>Logout</Nav.Link>
              </LinkContainer>
            ) : ( */}
            <LinkContainer to='/login'>
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            {/* )} */}

            <LinkContainer to='/register'>
              <Nav.Link>Register</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/add_post'>
              <Nav.Link>Add Post</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Header
