import React from 'react'

const RecentPosts = ({ postTitles }) => {
  return (
    <>
      <h5>Recent Posts</h5>
      <ul>
        {postTitles.map((postTitle) => (
          <li key={postTitle}>{postTitle}</li>
        ))}
      </ul>
    </>
  )
}

export default RecentPosts
