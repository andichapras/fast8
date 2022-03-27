const express = require('express')

const companiesController = require('../controllers/companies-controller')

const router = express.Router()

router.get('/', companiesController.getAllCompanies)
router.post('/', companiesController.createCompany)

module.exports = router