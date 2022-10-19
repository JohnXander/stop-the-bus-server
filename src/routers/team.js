const express = require("express")
const {
    getAllTeams,
    getTeam,
    deleteTeam,
    createTeams,
    updateTeam
} = require('../controllers/team')
const router = express.Router()

router.get("/", getAllTeams)
router.get("/:id", getTeam)
router.delete("/:id", deleteTeam)
router.post("/", createTeams)
router.patch("/:id", updateTeam)

module.exports = router