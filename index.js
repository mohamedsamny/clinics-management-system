const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const routers = require('./src/routers')
const { User, Prescription } = require('./src/models')

for (const [key, value] of Object.entries(routers)) {
  app.use(`/${key}`, value)
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
  const users = await User.findAll({ include: Prescription });
  res.json(users)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app