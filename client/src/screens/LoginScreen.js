import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import { useAlert } from 'react-alert'

const LoginScreen = () => {
  const alert = useAlert()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const loginUser = async (e) => {
    e.preventDefault()
    // alert.show('Hi')
    try {
      let user = await axios.post('/auth/login', {
        email: formData.email,
        password: formData.password,
      })

      const msg = user.data.message
      alert.show(msg, { type: 'success' })
    } catch (err) {
      const msg = err.response ? err.response.data.message : err
      alert.show(msg, { type: 'error' })
    }
  }
  return (
    <>
      <h3 className='text-center'>User Login</h3>
      <Form className='w-50 m-auto text-center' onSubmit={loginUser}>
        <Form.Group controlId='email'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Password'
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
        </Form.Group>
        <Button className='mt-3' variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </>
  )
}

export default LoginScreen
