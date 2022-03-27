const express = require('express')

const twoController = require('../controllers/two-controller')

const router = express.Router()

router.post('/', twoController.combination)

module.exports = router