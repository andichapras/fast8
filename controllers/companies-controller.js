const db = require('../models/index')
const Company = db.companies

const getCompany = (req, res, next) => {
    let comp = Company.findAll()
    .then(data => {
        res.send(data).json({comp})
    })
    .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating company."
        });
      })
}

const createCompany = (req, res, next) => {
    const { company_name, telephone_number, address } = req.body

    const company = {
        company_name,
        telephone_number,
        address
    }

    Company.create(company)
    .then(data => {
        res.send(data).json({company})
    })
    .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating company."
        });
      })
}

exports.getCompany = getCompany
exports.createCompany = createCompany