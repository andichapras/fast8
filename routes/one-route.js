const express = require('express')

const oneController = require('../controllers/one-controller')

const router = express.Router()

router.post('/', oneController.fibonacci)

module.exports = router