const express = require("express")
const {
    getAllCards,
    getCard,
    deleteCard,
    createCard,
    updateCard
} = require('../controllers/card')
const router = express.Router()

router.get("/", getAllCards)
router.get("/:id", getCard)
router.delete("/:id", deleteCard)
router.post("/", createCard)
router.patch("/:id", updateCard)

module.exports = router