import jwt from 'jsonwebtoken'
const generateToken = (id) => {
  const JWT_KEY = process.env.JWT_KEY
  jwt.sign({ id }, JWT_KEY, { expiresIn: '30d' })
}
export default generateToken
