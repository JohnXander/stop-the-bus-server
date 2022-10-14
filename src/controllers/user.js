const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

const getAllUsers = async (req, res) => {
    const users = await prisma.user.findMany()
    res.status(200).json({ users })
}

module.exports = {
    getAllUsers
}