import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
const Footer = () => {
  return (
    <>
      <Container fluid className='bg-dark text-white mt-3 py-4'>
        <Row className='my-2 footer-text'>
          <Col>
            <p>
              Welcome to 7blog. We are the leading Technology blog in the world.
              Enjoy quality content in the website
            </p>
          </Col>
          <Col>
            <p>
              We are known for proving best quality reviews, guides, How-to's
              and other quality articles to make you love technology
            </p>
          </Col>
          <Col>
            <ul className='list-unstyled'>
              <li>
                <h5>Our Links</h5>
              </li>
              <li>Home</li>
              <li>About</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col className='text-center'>
            <p>Copyright &copy; 2021 7Blog</p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Footer
