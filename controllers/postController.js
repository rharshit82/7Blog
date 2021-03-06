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

export const fetchPosts = async (req, res) => {
  try {
    const posts = await Post.find({}).sort({ createdAt: -1 })
    // console.log(posts)
    return res.status(201).send(posts)
  } catch (err) {
    return res.status(404).json({ message: 'No Post Found' })
  }
}

export const fetchPost = async (req, res) => {
  const { id } = req.body
  try {
    const post = await Post.findById(id)
    if (post) {
      return res.status(201).send(post)
    } else {
      return res.status(404).json({ message: 'Post not Found' })
    }
  } catch (err) {
    return res.status(500).json({ message: 'Some Error Occured' })
  }
}
