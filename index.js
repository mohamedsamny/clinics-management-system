const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const routers = require('./routers')


for (const [key, value] of Object.entries(routers)) {
  app.use(`/${key}`, value)
}

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'root',
  host: 'localhost',
  database: 'clinics',
  password: '',
  port: 5432,
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({ message: 'hooray! welcome to our api!' })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})