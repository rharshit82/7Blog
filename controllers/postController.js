import Post from '../models/postModel.js'
export const addPost = (req, res) => {
  const { title, content } = req.body
  Post.create(
    {
      author: req.user._id,
      title,
      content,
    },
    (err, post) => {
      if (err) {
        return res.status(400).json({ message: 'Invalid post data' })
      }
      return res.status(201).json({ message: 'Post Added Successfuly' })
    }
  )
}
