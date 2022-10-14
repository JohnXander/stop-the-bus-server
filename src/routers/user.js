const express = require("express")
const {
    getAllUsers,
    getUser,
    deleteUser,
    createUser,
    updateUser
} = require('../controllers/user')
const router = express.Router()

router.get("/", getAllUsers)
router.get("/:id", getUser)
router.delete("/:id", deleteUser)
router.post("/", createUser)
router.patch("/:id", updateUser)

module.exports = router