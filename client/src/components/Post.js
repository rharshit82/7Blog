import React from 'react'
import Loading from './Loading'
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
                <h2 className='text-primary'>{post.title}</h2>
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
