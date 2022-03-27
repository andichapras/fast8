const db = require('../models/index')
const Employee = db.employees

const getAllEmployees = (req, res, next) => {
    let emp = Employee.findAll()
    .then(data => {
        res.send(data).json({emp})
    })
    .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating company."
        });
      })
}

const createEmployee = (req, res, next) => {
    const { name, email, phone_number, jobtitle, company_id } = req.body

    let job = 'staff'
    if(jobtitle) {
        job = jobtitle
    }

    let phone = null
    if(phone_number) {
        phone = phone_number
    }

    const employee = {
        name,
        email,
        phone_number: phone,
        jobtitle: job,
        company_id
    }

    Employee.create(employee)
    .then(data => {
        res.send(data).json({employee})
    })
    .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating company."
        });
      })
}

exports.getAllEmployees = getAllEmployees
exports.createEmployee = createEmployee