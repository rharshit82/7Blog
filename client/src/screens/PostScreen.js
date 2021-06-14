import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import SinglePost from '../components/SinglePost'
import Loading from '../components/Loading'
const PostScreen = () => {
  const [post, setPost] = useState(null)
  const { id } = useParams()
  useEffect(() => {
    async function fetchPost() {
      try {
        const singlePost = await axios.post('/api/fetch_post', { id })
        setPost(singlePost.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchPost()
  })
  return <>{post === null ? <Loading /> : <SinglePost post={post} />}</>
}

export default PostScreen
