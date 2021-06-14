import React from 'react'
import Loading from './Loading'
import { LinkContainer } from 'react-router-bootstrap'
const Post = ({ posts, loading }) => {
  return (
    <>
      <div>
        <h1 className=' text-center mt-3'>Blog Posts</h1>

        {loading ? (
          <Loading />
        ) : (
          <div>
            {posts.map((post) => (
              <div className='my-4 mx-auto' key={post._id}>
                <LinkContainer to={`/post/${post._id}`}>
                  <h2 className='text-primary links'>{post.title}</h2>
                </LinkContainer>
                <p>
                  Posted on {post.createdAt.slice(0, 10)} at{' '}
                  {post.createdAt.split('T')[1].split('.')[0]}
                </p>
                <br />
                <p>{post.content}</p>
                <hr />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default Post
