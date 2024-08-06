import express from 'express'
import { getUser, getUserFriends, addRemoveFriend, getUserSchools, addRemoveSchool } from '../controllers/users.js'
import { verifyToken } from '../middleware/auth.js'

const router = express.Router()

/* READ */
router.get("/:id", verifyToken, getUser)
router.get("/:id/friends", verifyToken, getUserFriends)
router.get("/:id/schools", verifyToken, getUserSchools)

/* UPDATE */
router.patch("/:id/friendId", verifyToken, addRemoveFriend)
router.patch("/:id/schoolId", verifyToken, addRemoveSchool)

export default router