const express = require('express')
const router = express.Router()
const categoriesController = require('../controllers/categories')
const itemsController = require('../controllers/items')

router.get('/', categoriesController.getAll)
router.get('/:id', categoriesController.getById)
router.get('/:id/items', itemsController.getItemsByCategory)

module.exports = router
