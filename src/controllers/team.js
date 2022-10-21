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

const createTeams = async (req, res) => {
    const { teams, gameId } = req.body
    const data = teams.map(name => {
        return { name, points: 0, gameId }
    })
    await prisma.team.createMany({ data })
    res.status(201).json({ createdTeams: data })
}

const updateTeam = async (req, res) => {
    const id = +req.params.id
    const { name, points, gameId } = req.body
    const team = await prisma.team.update({
        where: { id },
        data: { name, points, gameId }
    })
    res.status(201).json({ team })
}

module.exports = {
    getAllTeams,
    getTeam,
    deleteTeam,
    createTeams,
    updateTeam
}