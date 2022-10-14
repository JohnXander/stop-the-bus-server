const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

const getAllGames = async (req, res) => {
    const games = await prisma.game.findMany()
    res.status(200).json({ games })
}

const getGame = async (req, res) => {
    const id = +req.params.id
    const game = await prisma.game.findUnique({ where: { id } })
    res.status(200).json({ game })
}

const deleteGame = async (req, res) => {
    const id = +req.params.id
    const game = await prisma.game.delete({ where: { id } })
    res.status(201).json({ game })
}

const createGame = async (req, res) => {
    const { name, userId } = req.body
    const game = await prisma.game.create({ data: { name, userId } })
    res.status(201).json({ game })
}

const updateGame = async (req, res) => {
    const id = +req.params.id
    const { name, userId } = req.body
    const game = await prisma.game.update({
        where: { id },
        data: { name, userId }
    })
    res.status(201).json({ game })
}

module.exports = {
    getAllGames,
    getGame,
    deleteGame,
    createGame,
    updateGame
}