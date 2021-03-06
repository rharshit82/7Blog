import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
const RecentPosts = ({ postTitles }) => {
  return (
    <>
      <h5>Recent Posts</h5>
      <ul>
        {postTitles.map((postTitle) => (
          <LinkContainer to={`/post/${postTitle[1]}`} key={postTitle[1]}>
            <li className='links'>{postTitle[0]}</li>
          </LinkContainer>
        ))}
      </ul>
    </>
  )
}

export default RecentPosts
