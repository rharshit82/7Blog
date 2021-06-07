import express from 'express'
import apiRoutes from './routes/apiRoutes.js'
import dotenv from 'dotenv'
import authRoutes from './routes/authRoutes.js'
import dbConnect from './middlewares/db.js'

//Initialising dotenv
dotenv.config()
//Initialising database
dbConnect()

//Initialising Express
const app = express()
//Bodyparser
// app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//Basic Routes
app.use('/api', apiRoutes)
app.use('/auth', authRoutes)

const PORT = process.env.PORT
app.listen(PORT || 5000, () => console.log('Server Running'))
