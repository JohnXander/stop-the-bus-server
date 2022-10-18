const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

const getAllCards = async (req, res) => {
    const { word } = req.query
    let cards

    if (word !== undefined) {
        cards = await prisma.card.findMany({ where: { word } })
    } else {
        cards = await prisma.card.findMany()
    }

    res.status(200).json({ cards })
}

const getCard = async (req, res) => {
    const id = +req.params.id
    const card = await prisma.card.findUnique({ where: { id } })
    res.status(200).json({ card })
}

const deleteCard = async (req, res) => {
    const id = +req.params.id
    const card = await prisma.card.delete({ where: { id } })
    res.status(201).json({ card })
}

const createCard = async (req, res) => {
    const { word, type, imgUrl, roundId } = req.body
    const card = await prisma.card.create({ data: { word, type, imgUrl, roundId } })
    res.status(201).json({ card })
}

const updateCard = async (req, res) => {
    const id = +req.params.id
    const { word, type, imgUrl, roundId } = req.body
    const card = await prisma.card.update({
        where: { id },
        data: { word, type, imgUrl, roundId }
    })
    res.status(201).json({ card })
}

module.exports = {
    getAllCards,
    getCard,
    deleteCard,
    createCard,
    updateCard
}