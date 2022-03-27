const express = require('express')

const fourController = require('../controllers/four-controller')

const router = express.Router()

router.get('/', fourController.countries)

module.exports = router