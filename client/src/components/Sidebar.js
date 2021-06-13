import React from 'react'
import RecentPosts from './RecentPosts'
const Sidebar = ({ postTitles }) => {
  return (
    <>
      <div>
        <h2 className='text-center'>Sidebar</h2>
        <RecentPosts postTitles={postTitles} />
      </div>
    </>
  )
}

export default Sidebar
