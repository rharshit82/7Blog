import bcrypt from 'bcrypt'
const saltRounds = 10
import User from '../models/userModel.js'
import generateToken from '../util/generateToken.js'

export const loginController = async (req, res) => {
  const { email, password } = req.body
  const user = User.findOne({ email })
  const isUser = bcrypt.compare(user.password, password)
  if (!isUser) {
    res.status(401).json({ message: 'Wrong Credentials' })
  }
  generateToken(user.id)
  return res.status(201).send({ message: 'Log in Success' })
}

export const registerController = async (req, res) => {
  const { name, email, password } = req.body
  const user = await User.findOne({ email })
  if (user) {
    return res.status(409).json({ message: 'User Already Exists' })
  }
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds)
    User.create(
      {
        name,
        email,
        password: hashedPassword,
      },
      (err, user) => {
        if (err) {
          return res.status(500).json({ message: `${err}` })
        } else {
          generateToken(user._id)
          return res.status(201).json({ message: 'User Registered' })
        }
      }
    )
  } catch (error) {
    return res.status(500).json({ message: `${err}` })
  }
}
