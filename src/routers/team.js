const express = require("express")
const {
    getAllTeams,
    getTeam,
    deleteTeam,
    createTeam,
    updateTeam
} = require('../controllers/team')
const router = express.Router()

router.get("/", getAllTeams)
router.get("/:id", getTeam)
router.delete("/:id", deleteTeam)
router.post("/", createTeam)
router.patch("/:id", updateTeam)

module.exports = router