import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loading from '../components/Loading'

const HomeScreen = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    async function fetchAllPosts() {
      try {
        let fetch_posts = await axios.get('/api/fetch_posts')
        if (loading) {
          setPosts(fetch_posts.data)
          setLoading(false)
        }
      } catch (err) {
        console.log(err)
      }
    }
    fetchAllPosts()
  }, [posts, setPosts, loading])

  return (
    <>
      <h1 className=' text-center'>Posts</h1>

      {loading ? (
        <Loading />
      ) : (
        <div>
          {posts.map((post) => (
            <div className='my-4 w-75 mx-auto border' key={post._id}>
              <h3>{post.title}</h3>
              <br />
              <p>{post.content}</p>
              <br />
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default HomeScreen
