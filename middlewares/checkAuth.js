const checkAuth = () => {
  const token = req.headers['x-access-token']
  if (!token) {
    return res.status(401).json({ message: 'Token not found' })
  }
  const JWT_KEY = process.env.JWT_KEY
  jwt.verify(token, JWT_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Not Logged In' })
    }
    return res.status(201).send(decoded)
  })
}
export default checkAuth
