import express from 'express'
import { addPost } from '../controllers/postController.js'
import { protect } from '../middlewares/checkAuth.js'
const router = express.Router()

router.post('/add_post', protect, addPost)

export default router
