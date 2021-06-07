import bcrypt from 'bcrypt'
import User from '../models/userModel.js'
import generateToken from '../util/generateToken.js'

export const loginController = async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (!user) {
    return res.status(404).json({ message: 'User Not Found' })
  }
  const isUser = bcrypt.compare(password, user.password)
  if (!isUser) {
    return res.status(401).json({ message: 'Wrong Credentials' })
  }
  generateToken(user.id)
  return res.status(201).send({ message: 'Log in Success' })
}

export const registerController = async (req, res) => {
  const { name, email, password } = req.body
  const user = await User.findOne({ email })
  if (user) {
    return res.status(401).json({ message: 'User already exists' })
  }
  const hashedPassword = await bcrypt.hash(password, 10)
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
        return res.status(200).json({ message: 'User Registered' })
      }
    }
  )
}
