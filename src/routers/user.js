const express = require("express")
const {
    getAllUsers,
    getUser,
    deleteUser,
    createUser,
    updateUser,
    loginUser
} = require('../controllers/user')
const router = express.Router()

router.get("/", getAllUsers)
router.get("/:id", getUser)
router.delete("/:id", deleteUser)
router.post("/register", createUser)
router.post("/login", loginUser)
router.patch("/:id", updateUser)

module.exports = router