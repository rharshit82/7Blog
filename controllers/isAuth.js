export const isAuth = async (req, res) => {
  const token = req.headers.authorization.split(' ')[1]
  const decoded = jwt.verify(token, process.env.JWT_KEY)
  try {
    const user = await User.findOne(decoded._id)
    return res.status(201).json({ isAuth: true })
  } catch (err) {
    if (err) {
      return res.status(401).json({ isAuth: false })
    }
  }
}
