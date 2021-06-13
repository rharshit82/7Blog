import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Post from '../components/Post'
import Sidebar from '../components/Sidebar'
import Pagination from '../components/Pagination'
const HomeScreen = () => {
  //States
  const [posts, setPosts] = useState([])
  const [postTitles, setPostTitles] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(5)

  //UseEffect
  useEffect(() => {
    async function fetchAllPosts() {
      try {
        let fetch_posts = await axios.get('/api/fetch_posts')
        if (loading) {
          setPosts(fetch_posts.data)
          setLoading(false)
          setPostTitles(posts.map((post) => post.title).slice(0, 6))
        }
      } catch (err) {
        console.log(err)
      }
    }
    fetchAllPosts()
  }, [posts, setPosts, loading])

  //Get current posts
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  //Change Page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  //Return value
  return (
    <>
      <div className='d-flex content'>
        <div className='px-5 posts'>
          <div>
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={posts.length}
              paginate={paginate}
            />
          </div>
          <Post posts={currentPosts} loading={loading} />
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
          />
        </div>
        <div className='sidebar mx-5'>
          <Sidebar postTitles={postTitles} />
        </div>
      </div>
    </>
  )
}

export default HomeScreen
