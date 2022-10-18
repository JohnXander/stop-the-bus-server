const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

const getAllRounds = async (req, res) => {
    const { gameId } = req.query
    let rounds

    if (gameId !== undefined) {
        rounds = await prisma.round.findMany({ where: { gameId: +gameId } })
    } else {
        rounds = await prisma.round.findMany()
    }

    res.status(200).json({ rounds })
}

const getRound = async (req, res) => {
    const id = +req.params.id
    const round = await prisma.round.findUnique({ where: { id } })
    res.status(200).json({ round })
}

const deleteRound = async (req, res) => {
    const id = +req.params.id
    const round = await prisma.round.delete({ where: { id } })
    res.status(201).json({ round })
}

const createRound = async (req, res) => {
    const { letter, answers, gameId } = req.body
    const round = await prisma.round.create({ data: { letter, answers, gameId } })
    res.status(201).json({ round })
}

const updateRound = async (req, res) => {
    const id = +req.params.id
    const { letter, answers, gameId } = req.body
    const round = await prisma.round.update({
        where: { id },
        data: { letter, answers, gameId }
    })
    res.status(201).json({ round })
}

module.exports = {
    getAllRounds,
    getRound,
    deleteRound,
    createRound,
    updateRound
}