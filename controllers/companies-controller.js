const db = require('../models/index')
const Company = db.companies

const getAllCompanies = (req, res, next) => {
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
    const { company_name, telephone_number, is_active, address } = req.body

    let telp = null
    if(telephone_number) {
      telp = telephone_number
    }

    let act = false
    if(is_active) {
      act = is_active
    }

    const company = {
        company_name,
        telephone_number: telp,
        is_active: act,
        address
    }

    Company.create(company)
    .then(data => {
      console.log(data)
      res.send(data).json({company})
    })
    .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating company."
        });
      })
}

exports.getAllCompanies = getAllCompanies
exports.createCompany = createCompany