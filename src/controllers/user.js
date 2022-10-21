const prisma = require('../utils/prisma')

const getAllUsers = async (req, res) => {
    const users = await prisma.user.findMany()
    res.status(200).json({ users })
}

const getUser = async (req, res) => {
    const id = +req.params.id
    const user = await prisma.user.findUnique({ where: { id } })
    res.status(200).json({ user })
}

const deleteUser = async (req, res) => {
    const id = +req.params.id
    const user = await prisma.user.delete({ where: { id } })
    res.status(201).json({ user })
}

const createUser = async (req, res) => {
    const { username, password, imgUrl } = req.body
    const user = await prisma.user.create({
        data: { username, password, imgUrl }
    })
    res.status(201).json({ user })
}

const updateUser = async (req, res) => {
    const id = +req.params.id
    const { username, password, imgUrl } = req.body
    const user = await prisma.user.update({
        where: { id },
        data: { username, password, imgUrl }
    })
    res.status(201).json({ user })
}

module.exports = {
    getAllUsers,
    getUser,
    deleteUser,
    createUser,
    updateUser
}