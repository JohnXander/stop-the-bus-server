const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

const getAllTeams = async (req, res) => {
    const teams = await prisma.team.findMany()
    res.status(200).json({ teams })
}

const getTeam = async (req, res) => {
    const id = +req.params.id
    const team = await prisma.team.findUnique({ where: { id } })
    res.status(200).json({ team })
}

const deleteTeam = async (req, res) => {
    const id = +req.params.id
    const team = await prisma.team.delete({ where: { id } })
    res.status(201).json({ team })
}

const createTeam = async (req, res) => {
    const { name, players, gameId } = req.body
    const team = await prisma.team.create({ data: { name, players, gameId } })
    res.status(201).json({ team })
}

const updateTeam = async (req, res) => {
    const id = +req.params.id
    const { name, players, gameId } = req.body
    const team = await prisma.team.update({
        where: { id },
        data: { name, players, gameId }
    })
    res.status(201).json({ team })
}

module.exports = {
    getAllTeams,
    getTeam,
    deleteTeam,
    createTeam,
    updateTeam
}