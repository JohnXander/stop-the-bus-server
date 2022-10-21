const prisma = require('../utils/prisma')

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

const createCategories = async (req, res) => {
    const { categories, gameId } = req.body
    const data = categories.map(name => {
        return { name, gameId }
    })
    await prisma.category.createMany({ data })
    res.status(201).json({ createdCategories: data })
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
    createCategories,
    updateCategory
}