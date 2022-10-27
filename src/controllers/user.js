const prisma = require('../utils/prisma')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const loginUser = async (req, res) => {
    const { username, password } = req.body
    const foundUser = await prisma.user.findUnique({ where: { username } })
    if (foundUser === null) {
        res.status(403).json({ error: 'Username or password is incorrect' })
    } else {
        const passwordsMatch = await bcrypt.compare(password, foundUser.password)
        if (!passwordsMatch) {
            res.status(403).json({ error: 'Username or password is incorrect' })
        } else {
            const token = jwt.sign({ username }, process.env.JWT_SECRET)
            res.status(201).json({ token })
        }
    }
}

const getAllUsers = async (req, res) => {
    const { username } = req.query
    let users

    if (username !== undefined) {
        users = await prisma.user.findMany({ where: { username } })
    } else {
        users = await prisma.user.findMany()
    }
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
    const exists = await prisma.user.findUnique({ where: { username } })
    if (exists !== null) {
        res.status(409).json({ error: 'Username already taken' })
    } else {
        const hashedPwd = await bcrypt.hash(password, 10)
        const user = await prisma.user.create({
            data: { username, password: hashedPwd, imgUrl }
        })
        res.status(201).json({ user })
    }
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
    updateUser,
    loginUser
}