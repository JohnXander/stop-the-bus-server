const express = require("express")
const {
    getAllCategories,
    getCategory,
    deleteCategory,
    createCategory,
    updateCategory
} = require('../controllers/category')
const router = express.Router()

router.get("/", getAllCategories)
router.get("/:id", getCategory)
router.delete("/:id", deleteCategory)
router.post("/", createCategory)
router.patch("/:id", updateCategory)

module.exports = router