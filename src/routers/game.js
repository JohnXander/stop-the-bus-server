const express = require("express")
const {
    getAllGames,
    getGame,
    deleteGame,
    createGame,
    updateGame
} = require('../controllers/game')
const router = express.Router()

router.get("/", getAllGames)
router.get("/:id", getGame)
router.delete("/:id", deleteGame)
router.post("/", createGame)
router.patch("/:id", updateGame)

module.exports = router