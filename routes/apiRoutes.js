import express from 'express'
import { addPost, fetchPosts } from '../controllers/postController.js'
import { protect } from '../middlewares/checkAuth.js'
import { isAuth } from '../controllers/isAuth.js'
const router = express.Router()

router.post('/add_post', protect, addPost)
router.post('/isAuth', isAuth)
router.get('/fetch_posts', fetchPosts)

export default router
