const express = require("express")
const {
    getAllCategories,
    getCategory,
    deleteCategory,
    createCategories,
    updateCategory
} = require('../controllers/category')
const router = express.Router()

router.get("/", getAllCategories)
router.get("/:id", getCategory)
router.delete("/:id", deleteCategory)
router.post("/", createCategories)
router.patch("/:id", updateCategory)

module.exports = router