const express =require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const oneRoute = require('./routes/one-route')
const twoRoute = require('./routes/two-route')
const fourRoute = require('./routes/four-route')
const companiesRoute = require('./routes/companies-route')
const employeesRoute = require('./routes/employees-route')

const db = require('./models/index')

const app = express()

db.sequelizing.sync()

app.use(bodyParser.json())
app.use(cors())

app.use('/api/fibonacci', oneRoute)
app.use('/api/combination', twoRoute)
app.use('/api/countries', fourRoute)
app.use('/api/companies', companiesRoute)
// app.use('/api/employees', employeesRoute)

app.listen(5000)