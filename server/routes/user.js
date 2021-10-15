const router = require('express').Router()
const { adminUserProtect, adminProtect } = require('../middleware/auth');
const { getUserById, updateUserById, getAllUsers, deleteUserById  }= require('../controllers/user')

router.put("/:userId", adminUserProtect, updateUserById)
router.delete("/:userId", adminProtect, deleteUserById)
router.get("/:userId", adminUserProtect, getUserById)
router.get("/", adminProtect, getAllUsers)
router.get("/stats", adminProtect)

module.exports = router