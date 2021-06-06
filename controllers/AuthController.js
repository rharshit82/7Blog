import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
const saltRounds = 10
import User from '../models/userModel.js'

export const loginController = (req, res) => {
  const { email, password } = req.body
  res.send('Hi')
}
export const registerController = async (req, res) => {
  const { name, email, password } = req.body
  const hashedPassword = await bcrypt.hash(password, saltRounds)
  const user = User.findOne({ email })
  if (user) return res.status(409).json({ message: 'User Already Exists' })
  try {
    User.create(
      {
        name,
        email,
        password: hashedPassword,
      },
      (err, user) => {
        if (err) {
          return res.status(500).json({ err })
        } else {
          const JWT_KEY = process.env.JWT_KEY
          jwt.sign({ id: user._id }, JWT_KEY, { expiresIn: '30d' })
          return res.status(201).json({ message: 'User Registered' })
        }
      }
    )
  } catch (error) {
    console.log(error)
  }
}
