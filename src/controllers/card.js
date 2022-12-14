const prisma = require('../utils/prisma')

const getAllCards = async (req, res) => {
    const { words, userId } = req.query
    let cards

    if (words !== undefined && userId !== undefined) {
        const wordArray = words.split(',')
        cards = await prisma.card.findMany({
            where: {
                OR: [
                    { word: wordArray[0] },
                    { word: wordArray[1] },
                    { word: wordArray[2] }
                ],
                AND: { userId: +userId }
            },
        })
    } else if (userId !== undefined) {
        cards = await prisma.card.findMany({ where: { userId: +userId } })
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
    const { word, type, imgUrl, userId } = req.body
    const card = await prisma.card.create({ data: { word, type, imgUrl, userId } })
    res.status(201).json({ card })
}

const updateCard = async (req, res) => {
    const id = +req.params.id
    const { word, type, imgUrl, userId } = req.body
    const card = await prisma.card.update({
        where: { id },
        data: { word, type, imgUrl, userId }
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