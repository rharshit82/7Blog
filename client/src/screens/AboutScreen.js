import React from 'react'

const AboutScreen = () => {
  return (
    <div className='post'>
      <h3>Welcome to 7Blog</h3>
      <p>
        I have created this Blog mainly using HTML,CSS, MongoDB, nodeJs -
        expressJs, reactJs, React Boostrap
      </p>
      <p>
        Visit my Github at{' '}
        <a href='https://github.com/rharshit82'>github.com/rharshit82</a>{' '}
      </p>
      <img
        src='https://source.unsplash.com/540x360/?welcome,about'
        alt='welcome'
      ></img>
      <h5>Have a nice Day !!</h5>
    </div>
  )
}

export default AboutScreen
