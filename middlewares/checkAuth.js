import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'
export const protect = async (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1]
  const decoded = jwt.verify(token, process.env.JWT_KEY)
  try {
    req.user = await User.findOne(decoded._id).select('-password')
    next()
  } catch (err) {
    if (err) {
      return res.status(401).json({ message: 'Not Authorized' })
    }
  }
}
