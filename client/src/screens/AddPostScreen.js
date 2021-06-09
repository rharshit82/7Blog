import React, { useState, useEffect } from 'react'
import { useAlert } from 'react-alert'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const AddPostScreen = () => {
  const history = useHistory()
  const alert = useAlert()
  const [formData, setFormData] = useState({ title: '', content: '' })

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    if (!userInfo) {
      history.push('/login')
    }
  }, [history])
  const addPost = async (e) => {
    e.preventDefault()
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    try {
      const post = await axios.post(
        '/api/add_post',
        {
          title: formData.title,
          content: formData.title,
        },
        config
      )
      if (post.status === 201) {
        alert.show('Post Added Successfuly', { type: 'success' })
      }
    } catch (err) {
      const msg = err.response ? err.response.data.message : err
      alert.show(msg, { type: 'error' })
    }
  }
  return (
    <>
      <h3 className='text-center'>Add new Post</h3>
      <Form className='w-75 m-auto text-center' onSubmit={addPost}>
        <Form.Group className='my-2' controlId='title'>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Post Title'
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
        </Form.Group>

        <Form.Group className='my-2' controlId='content'>
          <Form.Label>Content</Form.Label>
          <Form.Control
            as='textarea'
            rows={8}
            placeholder='Enter Content'
            value={formData.content}
            onChange={(e) =>
              setFormData({ ...formData, content: e.target.value })
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

export default AddPostScreen
