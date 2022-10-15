const express = require("express")
const {
    getAllRounds,
    getRound,
    deleteRound,
    createRound,
    updateRound
} = require('../controllers/round')
const router = express.Router()

router.get("/", getAllRounds)
router.get("/:id", getRound)
router.delete("/:id", deleteRound)
router.post("/", createRound)
router.patch("/:id", updateRound)

module.exports = router