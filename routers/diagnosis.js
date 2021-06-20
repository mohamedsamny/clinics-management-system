let express = require('express')
const {diagnosis} = require("../models");
let router = express.Router()

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'root',
  host: 'localhost',
  database: 'clinics',
  password: '',
  port: 5432,
})

router.get('/',async(req, res) => {
  const { rows } = await diagnosis.findAll(pool)
  res.json(rows)
})
router.get('/:id', async(req, res) => {
  const { rows } = await diagnosis.find(pool, req.params.id)
  res.json(rows)
})

module.exports = router