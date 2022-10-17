const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

const getAllCategories = async (req, res) => {
    const { gameId } = req.query
    let categories

    if (gameId !== undefined) {
        categories = await prisma.category.findMany({ where: { gameId: +gameId } })
    } else {
        categories = await prisma.category.findMany()
    }

    res.status(200).json({ categories })
}

const getCategory = async (req, res) => {
    const id = +req.params.id
    const category = await prisma.category.findUnique({ where: { id } })
    res.status(200).json({ category })
}

const deleteCategory = async (req, res) => {
    const id = +req.params.id
    const category = await prisma.category.delete({ where: { id } })
    res.status(201).json({ category })
}

const createCategory = async (req, res) => {
    const { name, gameId } = req.body
    const category = await prisma.category.create({ data: { name, gameId } })
    res.status(201).json({ category })
}

const updateCategory = async (req, res) => {
    const id = +req.params.id
    const { name, gameId } = req.body
    const category = await prisma.category.update({
        where: { id },
        data: { name, gameId }
    })
    res.status(201).json({ category })
}

module.exports = {
    getAllCategories,
    getCategory,
    deleteCategory,
    createCategory,
    updateCategory
}