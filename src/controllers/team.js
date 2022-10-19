const { Prisma } = require("@prisma/client")
const prisma = require('../utils/prisma')

const getAllTeams = async (req, res) => {
    const { gameId } = req.query
    let teams

    if (gameId !== undefined) {
        teams = await prisma.team.findMany({ where: { gameId: +gameId } })
    } else {
        teams = await prisma.team.findMany()
    }

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
    const { name, players, points, gameId } = req.body
    const team = await prisma.team.create({ data: { name, players, points, gameId } })
    res.status(201).json({ team })
}

const updateTeam = async (req, res) => {
    const id = +req.params.id
    const { name, players, points, gameId } = req.body
    const team = await prisma.team.update({
        where: { id },
        data: { name, players, points, gameId }
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