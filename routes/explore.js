const express = require('express')
const router = express.Router()

const exploreController = require('../controllers/explore')
router.get('/explore/index', exploreController.index_get)

module.exports = router