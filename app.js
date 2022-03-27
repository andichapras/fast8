const express =require('express')
const cors = require('cors')

const oneRoute = require('./routes/one-route')
const twoRoute = require('./routes/two-route')
const fourRoute = require('./routes/four-route')
const companiesRoute = require('./routes/companies-route')
const employeesRoute = require('./routes/employees-route')

const db = require('./models/index')
db.sequelizing.sync()

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/fibonacci', oneRoute)
app.use('/api/combination', twoRoute)
app.use('/api/countries', fourRoute)
app.use('/api/companies', companiesRoute)
// app.use('/api/employees', employeesRoute)

app.listen(5000)