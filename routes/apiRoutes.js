import express from 'express'
import {
  addPost,
  fetchPosts,
  fetchPost,
} from '../controllers/postController.js'
import { protect } from '../middlewares/checkAuth.js'
import { isAuth } from '../controllers/isAuth.js'
const router = express.Router()

router.post('/add_post', protect, addPost)
router.post('/is_auth', isAuth)
router.get('/fetch_posts', fetchPosts)
router.post('/fetch_post', fetchPost)

export default router
